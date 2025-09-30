/**
 * Interactive Particle Network Background System
 * Modern particle network with dynamic connections for IT consultant portfolio
 */

class ParticleNetwork {
    constructor(canvas, config = {}) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        
        // Configuration with modern particle network defaults
        this.config = {
            particleCount: window.innerWidth > 768 ? 80 : 50,
            maxConnectionDistance: 150,
            cursorInfluenceRadius: window.innerWidth > 768 ? 200 : 150,
            cursorAttractionStrength: 0.015,
            particleSpeed: 0.2,
            particleSize: { min: 2, max: 4 },
            colors: {
                particle: '#4a9eff',
                particleAlt: '#ffffff',
                connection: 'rgba(74, 158, 255, 0.3)',
                connectionActive: 'rgba(74, 158, 255, 0.6)'
            },
            ...config
        };
        
        this.particles = [];
        this.connections = [];
        this.cursor = { x: 0, y: 0, isActive: false };
        this.animationId = null;
        
        this.init();
    }
    
    init() {
        this.resize();
        this.createParticles();
        this.setupEventListeners();
        this.animate();
    }
    
    resize() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        
        // Update particle positions if canvas was resized
        if (this.particles.length > 0) {
            this.particles.forEach(particle => {
                if (particle.x > this.canvas.width) particle.x = this.canvas.width - 50;
                if (particle.y > this.canvas.height) particle.y = this.canvas.height - 50;
            });
        }
    }
    
    createParticles() {
        this.particles = [];
        for (let i = 0; i < this.config.particleCount; i++) {
            this.particles.push(new Particle(
                Math.random() * this.canvas.width,
                Math.random() * this.canvas.height,
                this.config
            ));
        }
    }
    
    setupEventListeners() {
        // Mouse tracking for interaction
        document.addEventListener('mousemove', (e) => {
            this.cursor.x = e.clientX;
            this.cursor.y = e.clientY;
            this.cursor.isActive = true;
        });
        
        document.addEventListener('mouseleave', () => {
            this.cursor.isActive = false;
        });
        
        // Resize handling
        window.addEventListener('resize', () => {
            this.resize();
        });
        
        // Touch support for mobile devices
        document.addEventListener('touchmove', (e) => {
            if (e.touches.length > 0) {
                this.cursor.x = e.touches[0].clientX;
                this.cursor.y = e.touches[0].clientY;
                this.cursor.isActive = true;
            }
        });
        
        document.addEventListener('touchend', () => {
            this.cursor.isActive = false;
        });
    }
    
    updateParticles() {
        this.particles.forEach(particle => {
            particle.update(this.cursor, this.canvas);
        });
    }
    
    updateConnections() {
        this.connections = [];
        
        for (let i = 0; i < this.particles.length; i++) {
            for (let j = i + 1; j < this.particles.length; j++) {
                const distance = this.getDistance(this.particles[i], this.particles[j]);
                
                if (distance < this.config.maxConnectionDistance) {
                    const connection = new Connection(
                        this.particles[i], 
                        this.particles[j], 
                        distance, 
                        this.config
                    );
                    connection.updateStrength(this.cursor);
                    this.connections.push(connection);
                }
            }
        }
    }
    
    render() {
        // Clear canvas
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        
        // Draw connections first (behind particles)
        this.connections.forEach(connection => {
            connection.draw(this.ctx);
        });
        
        // Draw particles on top
        this.particles.forEach(particle => {
            particle.draw(this.ctx);
        });
    }
    
    animate() {
        this.updateParticles();
        this.updateConnections();
        this.render();
        
        this.animationId = requestAnimationFrame(() => this.animate());
    }
    
    getDistance(obj1, obj2) {
        const dx = obj1.x - obj2.x;
        const dy = obj1.y - obj2.y;
        return Math.sqrt(dx * dx + dy * dy);
    }
    
    destroy() {
        if (this.animationId) {
            cancelAnimationFrame(this.animationId);
        }
    }
}

class Particle {
    constructor(x, y, config) {
        this.x = x;
        this.y = y;
        this.vx = (Math.random() - 0.5) * config.particleSpeed;
        this.vy = (Math.random() - 0.5) * config.particleSpeed;
        this.config = config;
        this.activity = 0;
        this.size = Math.random() * (config.particleSize.max - config.particleSize.min) + config.particleSize.min;
        this.baseSize = this.size;
        this.targetSize = this.size;
        this.opacity = 0.8;
        this.targetOpacity = 0.8;
        this.useAltColor = Math.random() < 0.2;
    }
    
    update(cursor, canvas) {
        // Smooth floating movement
        this.x += this.vx;
        this.y += this.vy;
        
        // Bounce off screen edges
        if (this.x <= this.size || this.x >= canvas.width - this.size) {
            this.vx *= -1;
        }
        if (this.y <= this.size || this.y >= canvas.height - this.size) {
            this.vy *= -1;
        }
        
        // Keep particles within bounds
        this.x = Math.max(this.size, Math.min(canvas.width - this.size, this.x));
        this.y = Math.max(this.size, Math.min(canvas.height - this.size, this.y));
        
        // Gentle direction changes for more organic movement
        if (Math.random() < 0.02) {
            this.vx += (Math.random() - 0.5) * 0.1;
            this.vy += (Math.random() - 0.5) * 0.1;
            
            // Limit speed
            const speed = Math.sqrt(this.vx * this.vx + this.vy * this.vy);
            if (speed > this.config.particleSpeed) {
                this.vx = (this.vx / speed) * this.config.particleSpeed;
                this.vy = (this.vy / speed) * this.config.particleSpeed;
            }
        }
        
        // Calculate cursor influence for interaction
        if (cursor.isActive) {
            const dx = cursor.x - this.x;
            const dy = cursor.y - this.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            
            if (distance < this.config.cursorInfluenceRadius) {
                // Gentle attraction to cursor
                const force = (this.config.cursorInfluenceRadius - distance) / this.config.cursorInfluenceRadius;
                this.x += dx * force * this.config.cursorAttractionStrength;
                this.y += dy * force * this.config.cursorAttractionStrength;
                
                // Update activity and visual properties based on proximity
                this.activity = Math.min(1, force * 1.5);
                this.targetSize = this.baseSize + (this.baseSize * 0.5 * this.activity);
                this.targetOpacity = 0.8 + (0.2 * this.activity);
            } else {
                this.activity = Math.max(0, this.activity - 0.02);
                this.targetSize = this.baseSize;
                this.targetOpacity = 0.8;
            }
        } else {
            this.activity = Math.max(0, this.activity - 0.01);
            this.targetSize = this.baseSize;
            this.targetOpacity = 0.8;
        }
        
        // Smooth transitions
        this.size = this.size + (this.targetSize - this.size) * 0.1;
        this.opacity = this.opacity + (this.targetOpacity - this.opacity) * 0.1;
    }
    
    draw(ctx) {
        // Choose color based on particle type and activity
        let color = this.useAltColor ? this.config.colors.particleAlt : this.config.colors.particle;
        
        // Add glow effect for highly active particles
        if (this.activity > 0.5) {
            ctx.beginPath();
            const gradient = ctx.createRadialGradient(
                this.x, this.y, 0,
                this.x, this.y, this.size * 3
            );
            gradient.addColorStop(0, this.hexToRgba(color, this.activity * 0.3));
            gradient.addColorStop(1, this.hexToRgba(color, 0));
            ctx.fillStyle = gradient;
            ctx.arc(this.x, this.y, this.size * 3, 0, Math.PI * 2);
            ctx.fill();
        }
        
        // Draw main particle
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.hexToRgba(color, this.opacity);
        ctx.fill();
    }
    
    hexToRgba(hex, alpha) {
        if (hex.startsWith('#')) {
            const r = parseInt(hex.slice(1, 3), 16);
            const g = parseInt(hex.slice(3, 5), 16);
            const b = parseInt(hex.slice(5, 7), 16);
            return `rgba(${r}, ${g}, ${b}, ${alpha})`;
        }
        return hex;
    }
}

class Connection {
    constructor(particle1, particle2, distance, config) {
        this.particle1 = particle1;
        this.particle2 = particle2;
        this.distance = distance;
        this.config = config;
        this.strength = 0;
        this.baseOpacity = 1 - (distance / config.maxConnectionDistance);
    }
    
    updateStrength(cursor) {
        if (!cursor.isActive) {
            this.strength = Math.max(0, this.strength - 0.02);
            return;
        }
        
        // Calculate cursor proximity to connection line
        const midX = (this.particle1.x + this.particle2.x) / 2;
        const midY = (this.particle1.y + this.particle2.y) / 2;
        const dx = cursor.x - midX;
        const dy = cursor.y - midY;
        const distanceToCursor = Math.sqrt(dx * dx + dy * dy);
        
        // Consider individual particle activities
        const maxParticleActivity = Math.max(this.particle1.activity, this.particle2.activity);
        
        if (distanceToCursor < this.config.cursorInfluenceRadius) {
            const proximityStrength = (this.config.cursorInfluenceRadius - distanceToCursor) / this.config.cursorInfluenceRadius;
            this.strength = Math.min(1, Math.max(proximityStrength, maxParticleActivity));
        } else {
            this.strength = Math.max(0, maxParticleActivity);
        }
    }
    
    draw(ctx) {
        if (this.baseOpacity <= 0.1) return;
        
        // Calculate final opacity with smooth fade in/out
        const finalOpacity = this.baseOpacity * 0.3 + (this.strength * 0.3);
        
        // Choose connection color based on interaction strength
        let strokeStyle;
        if (this.strength > 0.5) {
            strokeStyle = this.config.colors.connectionActive.replace('0.6', finalOpacity.toFixed(2));
        } else {
            strokeStyle = this.config.colors.connection.replace('0.3', finalOpacity.toFixed(2));
        }
        
        ctx.beginPath();
        ctx.moveTo(this.particle1.x, this.particle1.y);
        ctx.lineTo(this.particle2.x, this.particle2.y);
        ctx.lineWidth = 1 + (this.strength * 0.5);
        ctx.strokeStyle = strokeStyle;
        ctx.stroke();
    }
}

// Initialize particle network when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    const canvas = document.getElementById('neuralNetworkCanvas');
    
    if (canvas && canvas.style.display !== 'none') {
        console.log('Initializing particle network...');
        
        // FORCE canvas to full size IMMEDIATELY
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        canvas.style.width = '100%';
        canvas.style.height = '100%';
        
        console.log('Canvas dimensions set to:', canvas.width, 'x', canvas.height);
        
        // Get config from resumeConfig or use defaults
        const config = resumeConfig.background?.particle || {
            particleCount: window.innerWidth > 768 ? 80 : 50,
            maxConnectionDistance: 150,
            cursorInfluenceRadius: window.innerWidth > 768 ? 200 : 150,
            cursorAttractionStrength: 0.015,
            particleSpeed: 0.2,
            particleSize: { min: 2, max: 4 },
            colors: {
                particle: '#4a9eff',
                particleAlt: '#ffffff',
                connection: 'rgba(74, 158, 255, 0.3)',
                connectionActive: 'rgba(74, 158, 255, 0.6)'
            }
        };
        
        console.log('Creating particle network with config:', config);
        
        window.particleNetwork = new ParticleNetwork(canvas, config);
        
        console.log('Particle network initialized successfully!');
        console.log('Number of particles:', window.particleNetwork.particles.length);
        
        // Force an immediate render to make sure it's visible
        setTimeout(() => {
            if (window.particleNetwork) {
                window.particleNetwork.render();
                console.log('Initial render complete');
            }
        }, 100);
    } else {
        console.log('Canvas not found or hidden');
    }
});
