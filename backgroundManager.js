/**
 * Interactive Background Manager
 * Manages different background effects including Particle Network and Vanta.js effects
 */

class BackgroundManager {
    constructor(config = {}) {
        this.config = config;
        this.currentBackground = null;
        this.currentEffect = null;
        this.canvas = document.getElementById('neuralNetworkCanvas');

        if (!this.canvas) {
            console.error('Background canvas not found');
            return;
        }

        this.init();
    }

    init() {
        const backgroundType = this.config.type || 'particleNetwork';
        this.loadBackground(backgroundType, this.config.options || {});
    }

    loadBackground(type, options = {}) {
        // Clean up existing background
        this.cleanup();

        switch (type) {
            case 'particleNetwork':
                this.loadParticleNetwork(options);
                break;
            case 'vanta-clouds':
                this.loadVantaClouds(options);
                break;
            case 'vanta-waves':
                this.loadVantaWaves(options);
                break;
            case 'vanta-fog':
                this.loadVantaFog(options);
                break;
            case 'vanta-clouds2':
                this.loadVantaClouds2(options);
                break;
            case 'vanta-birds':
                this.loadVantaBirds(options);
                break;
            case 'vanta-net':
                this.loadVantaNet(options);
                break;
            case 'vanta-cells':
                this.loadVantaCells(options);
                break;
            case 'vanta-trunk':
                this.loadVantaTrunk(options);
                break;
            case 'vanta-topology':
                this.loadVantaTopology(options);
                break;
            case 'vanta-dots':
                this.loadVantaDots(options);
                break;
            case 'vanta-rings':
                this.loadVantaRings(options);
                break;
            case 'vanta-globe':
                this.loadVantaGlobe(options);
                break;
            case 'vanta-halo':
                this.loadVantaHalo(options);
                break;
            case 'none':
                // No background
                break;
            default:
                console.warn(`Unknown background type: ${type}, defaulting to particle network`);
                this.loadParticleNetwork(options);
        }

        this.currentBackground = type;
    }

    loadParticleNetwork(options = {}) {
        if (typeof ParticleNetwork === 'undefined') {
            console.error('ParticleNetwork class not found. Make sure particleNetwork.js is loaded.');
            return;
        }

        const config = {
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
            ...options
        };

        this.currentEffect = new ParticleNetwork(this.canvas, config);
    }

    // Vanta.js Effects
    loadVantaClouds(options = {}) {
        if (typeof VANTA === 'undefined' || typeof VANTA.CLOUDS === 'undefined') {
            console.error('VANTA.CLOUDS not found. Make sure vanta.clouds.min.js is loaded.');
            return;
        }

        this.currentEffect = VANTA.CLOUDS({
            el: this.canvas,
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.00,
            minWidth: 200.00,
            skyColor: 0x68b8d7,
            cloudColor: 0xadc1de,
            cloudShadowColor: 0x183550,
            sunColor: 0xff9919,
            sunGlareColor: 0xff6633,
            sunlightColor: 0xff9933,
            speed: 1.2,
            ...options
        });
    }

    loadVantaClouds2(options = {}) {
        if (typeof VANTA === 'undefined' || typeof VANTA.CLOUDS2 === 'undefined') {
            console.error('VANTA.CLOUDS2 not found. Make sure vanta.clouds2.min.js is loaded.');
            return;
        }

        this.currentEffect = VANTA.CLOUDS2({
            el: this.canvas,
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.00,
            minWidth: 200.00,
            skyColor: 0x222233,
            cloudColor: 0x445566,
            lightColor: 0xffffff,
            speed: 0.6,
            ...options
        });
    }

    loadVantaWaves(options = {}) {
        if (typeof VANTA === 'undefined' || typeof VANTA.WAVES === 'undefined') {
            console.error('VANTA.WAVES not found. Make sure vanta.waves.min.js is loaded.');
            return;
        }

        this.currentEffect = VANTA.WAVES({
            el: this.canvas,
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.00,
            minWidth: 200.00,
            scale: 1.00,
            scaleMobile: 1.00,
            color: 0x1f4f7,
            shininess: 30.00,
            waveHeight: 15.00,
            waveSpeed: 0.75,
            zoom: 0.75,
            ...options
        });
    }

    loadVantaFog(options = {}) {
        if (typeof VANTA === 'undefined' || typeof VANTA.FOG === 'undefined') {
            console.error('VANTA.FOG not found. Make sure vanta.fog.min.js is loaded.');
            return;
        }

        this.currentEffect = VANTA.FOG({
            el: this.canvas,
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.00,
            minWidth: 200.00,
            highlightColor: 0x5599ff,
            midtoneColor: 0x3355aa,
            lowlightColor: 0x111133,
            baseColor: 0x111122,
            blurFactor: 0.6,
            speed: 1.5,
            zoom: 0.8,
            ...options
        });
    }

    loadVantaBirds(options = {}) {
        if (typeof VANTA === 'undefined' || typeof VANTA.BIRDS === 'undefined') {
            console.error('VANTA.BIRDS not found. Make sure vanta.birds.min.js is loaded.');
            return;
        }

        this.currentEffect = VANTA.BIRDS({
            el: this.canvas,
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.00,
            minWidth: 200.00,
            scale: 1.00,
            scaleMobile: 1.00,
            backgroundColor: 0x111122,
            color1: 0xff00ff,
            color2: 0x00ffff,
            colorMode: 'lerp',
            birdSize: 1.5,
            wingSpan: 25.00,
            speedLimit: 5.00,
            separation: 40.00,
            alignment: 40.00,
            cohesion: 30.00,
            quantity: 3.00,
            ...options
        });
    }

    loadVantaNet(options = {}) {
        if (typeof VANTA === 'undefined' || typeof VANTA.NET === 'undefined') {
            console.error('VANTA.NET not found. Make sure vanta.net.min.js is loaded.');
            return;
        }

        this.currentEffect = VANTA.NET({
            el: this.canvas,
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.00,
            minWidth: 200.00,
            scale: 1.00,
            scaleMobile: 1.00,
            color: 0x3f9cff,
            backgroundColor: 0x0a0a0a,
            points: 10.00,
            maxDistance: 20.00,
            spacing: 15.00,
            showDots: true,
            ...options
        });
    }

    loadVantaCells(options = {}) {
        if (typeof VANTA === 'undefined' || typeof VANTA.CELLS === 'undefined') {
            console.error('VANTA.CELLS not found. Make sure vanta.cells.min.js is loaded.');
            return;
        }

        this.currentEffect = VANTA.CELLS({
            el: this.canvas,
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.00,
            minWidth: 200.00,
            scale: 1.00,
            color1: 0x2266ff,
            color2: 0xff3388,
            size: 1.50,
            speed: 1.00,
            ...options
        });
    }

    loadVantaTrunk(options = {}) {
        if (typeof VANTA === 'undefined' || typeof VANTA.TRUNK === 'undefined') {
            console.error('VANTA.TRUNK not found. Make sure vanta.trunk.min.js is loaded.');
            return;
        }

        this.currentEffect = VANTA.TRUNK({
            el: this.canvas,
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.00,
            minWidth: 200.00,
            scale: 1.00,
            scaleMobile: 1.00,
            backgroundColor: 0x0a0a0a,
            color: 0x3f9cff,
            spacing: 0,
            chaos: 4.00,
            ...options
        });
    }

    loadVantaTopology(options = {}) {
        if (typeof VANTA === 'undefined' || typeof VANTA.TOPOLOGY === 'undefined') {
            console.error('VANTA.TOPOLOGY not found. Make sure vanta.topology.min.js is loaded.');
            return;
        }

        this.currentEffect = VANTA.TOPOLOGY({
            el: this.canvas,
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.00,
            minWidth: 200.00,
            scale: 1.00,
            scaleMobile: 1.00,
            color: 0x3f9cff,
            backgroundColor: 0x0a0a0a,
            ...options
        });
    }

    loadVantaDots(options = {}) {
        if (typeof VANTA === 'undefined' || typeof VANTA.DOTS === 'undefined') {
            console.error('VANTA.DOTS not found. Make sure vanta.dots.min.js is loaded.');
            return;
        }

        this.currentEffect = VANTA.DOTS({
            el: this.canvas,
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.00,
            minWidth: 200.00,
            scale: 1.00,
            scaleMobile: 1.00,
            color: 0x3f9cff,
            color2: 0xff3f7f,
            backgroundColor: 0x0a0a0a,
            size: 3.00,
            spacing: 35.00,
            showLines: true,
            ...options
        });
    }

    loadVantaRings(options = {}) {
        if (typeof VANTA === 'undefined' || typeof VANTA.RINGS === 'undefined') {
            console.error('VANTA.RINGS not found. Make sure vanta.rings.min.js is loaded.');
            return;
        }

        this.currentEffect = VANTA.RINGS({
            el: this.canvas,
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.00,
            minWidth: 200.00,
            scale: 1.00,
            scaleMobile: 1.00,
            backgroundColor: 0x0a0a0a,
            color: 0x3f9cff,
            ...options
        });
    }

    loadVantaGlobe(options = {}) {
        if (typeof VANTA === 'undefined' || typeof VANTA.GLOBE === 'undefined') {
            console.error('VANTA.GLOBE not found. Make sure vanta.globe.min.js is loaded.');
            return;
        }

        this.currentEffect = VANTA.GLOBE({
            el: this.canvas,
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.00,
            minWidth: 200.00,
            scale: 1.00,
            scaleMobile: 1.00,
            color: 0x3f9cff,
            color2: 0xff3388,
            backgroundColor: 0x0a0a0a,
            size: 1.0,
            ...options
        });
    }

    loadVantaHalo(options = {}) {
        if (typeof VANTA === 'undefined' || typeof VANTA.HALO === 'undefined') {
            console.error('VANTA.HALO not found. Make sure vanta.halo.min.js is loaded.');
            return;
        }

        this.currentEffect = VANTA.HALO({
            el: this.canvas,
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.00,
            minWidth: 200.00,
            baseColor: 0x0,
            backgroundColor: 0x0a0a0a,
            amplitudeFactor: 1.0,
            xOffset: 0.2,
            yOffset: 0.1,
            size: 1.5,
            ...options
        });
    }

    cleanup() {
        if (this.currentEffect) {
            if (typeof this.currentEffect.destroy === 'function') {
                this.currentEffect.destroy();
            }
            this.currentEffect = null;
        }

        // Clear canvas
        if (this.canvas) {
            const ctx = this.canvas.getContext('2d');
            if (ctx) {
                ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
            }
        }
    }

    switchBackground(type, options = {}) {
        this.loadBackground(type, options);
    }
}

// Initialize background when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Check if resumeConfig and background config exist
    if (typeof resumeConfig !== 'undefined' && resumeConfig.background) {
        window.backgroundManager = new BackgroundManager(resumeConfig.background);
    } else {
        // Default to particle network if no config
        console.warn('No background configuration found, using default particle network');
        window.backgroundManager = new BackgroundManager({
            type: 'particleNetwork',
            options: {}
        });
    }
});
