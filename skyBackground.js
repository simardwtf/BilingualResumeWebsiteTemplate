/**
 * Interactive Sky Background System using Vanta.js
 * Creates animated 3D cloud background with customizable colors
 */

class SkyBackground {
    constructor(element, config = {}) {
        this.element = element;
        this.vantaEffect = null;
        
        // Default configuration matching the Webflow example
        this.config = {
            skyColor: config.skyColor || 0x5eb7d9,
            cloudColor: config.cloudColor || 0xb1c2dc,
            cloudShadowColor: config.cloudShadowColor || 0x1b3a57,
            sunColor: config.sunColor || 0xff9c21,
            sunGlareColor: config.sunGlareColor || 0xfa6331,
            sunlightColor: config.sunlightColor || 0xfa9531,
            speed: config.speed || 1,
            ...config
        };
        
        this.init();
    }
    
    init() {
        // Wait for Vanta and Three.js to load
        if (typeof VANTA === 'undefined' || typeof THREE === 'undefined') {
            console.error('Vanta.js or Three.js not loaded');
            return;
        }
        
        // Initialize Vanta clouds effect
        this.vantaEffect = VANTA.CLOUDS({
            el: this.element,
            THREE: THREE,
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.00,
            minWidth: 200.00,
            skyColor: this.config.skyColor,
            cloudColor: this.config.cloudColor,
            cloudShadowColor: this.config.cloudShadowColor,
            sunColor: this.config.sunColor,
            sunGlareColor: this.config.sunGlareColor,
            sunlightColor: this.config.sunlightColor,
            speed: this.config.speed
        });
    }
    
    updateColors(newConfig) {
        if (this.vantaEffect) {
            this.vantaEffect.setOptions({
                skyColor: newConfig.skyColor || this.config.skyColor,
                cloudColor: newConfig.cloudColor || this.config.cloudColor,
                cloudShadowColor: newConfig.cloudShadowColor || this.config.cloudShadowColor,
                sunColor: newConfig.sunColor || this.config.sunColor,
                sunGlareColor: newConfig.sunGlareColor || this.config.sunGlareColor,
                sunlightColor: newConfig.sunlightColor || this.config.sunlightColor
            });
        }
    }
    
    destroy() {
        if (this.vantaEffect) {
            this.vantaEffect.destroy();
            this.vantaEffect = null;
        }
    }
}

// Initialize sky background when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Only initialize if sky background is selected in config
    if (resumeConfig.background && resumeConfig.background.type === 'sky') {
        const skyElement = document.getElementById('skyBackgroundContainer');
        
        if (skyElement) {
            // Get custom colors from config or use defaults
            const skyConfig = resumeConfig.background.sky || {};
            
            window.skyBackground = new SkyBackground(skyElement, skyConfig);
            
            console.log('Sky background initialized successfully!');
        }
    }
});
