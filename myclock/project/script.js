// byterover-retrieve-knowledge

// State management
let mounted = false;
let time = { hours: '00', minutes: '00', seconds: '00', miniseconds: '000', microseconds: '000' };

// DOM elements
const loadingScreen = document.getElementById('loading');
const appContainer = document.getElementById('app');
const hoursElement = document.getElementById('hours');
const minutesElement = document.getElementById('minutes');
const secondsElement = document.getElementById('seconds');
const minisecondsElement = document.getElementById('miniseconds');
const microsecondsElement = document.getElementById('microseconds'); // Added for microseconds
const hoursGlow = document.getElementById('hours-glow');
const minutesGlow = document.getElementById('minutes-glow');
const secondsGlow = document.getElementById('seconds-glow');
const minisecondsGlow = document.getElementById('miniseconds-glow');
const microsecondsGlow = document.getElementById('microseconds-glow'); // Added for microseconds
const dateElement = document.getElementById('date');
const particlesContainer = document.getElementById('particles');

// Initialize the application
function init() {
    // Create floating particles
    createParticles();

    // Hide loading screen after a short delay
    setTimeout(() => {
        loadingScreen.classList.add('hidden');
        appContainer.classList.add('animate-in');
        mounted = true;

        // Start the clock
        updateClock();
        setInterval(updateClock, 0);
    }, 1);
}

// Create floating particles
function createParticles() {
    const particleCount = 100;

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';

        // Random positioning
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';

        // Random animation delay and duration
        particle.style.animationDelay = Math.random() * 5 + 's';
        particle.style.animationDuration = (3 + Math.random() * 4) + 's';

        particlesContainer.appendChild(particle);
    }
}

// Update clock function
function updateClock() {
    if (!mounted) return;

    const now = new Date();
    const performanceNow = performance.now();
    const ms = now.getMilliseconds();
    const micro = Math.floor((performanceNow % 1) * 1000);

    const newTime = {
        hours: now.getHours().toString().padStart(2, '0'),
        minutes: now.getMinutes().toString().padStart(2, '0'),
        seconds: now.getSeconds().toString().padStart(2, '0'),
        miniseconds: ms.toString().padStart(3, '0'),
        microseconds: micro.toString().padStart(3, '0')
    };

    // Update time display with smooth transitions
    updateTimeElement(hoursElement, hoursGlow, newTime.hours, time.hours);
    updateTimeElement(minutesElement, minutesGlow, newTime.minutes, time.minutes);
    updateTimeElement(secondsElement, secondsGlow, newTime.seconds, time.seconds);
    updateTimeElement(minisecondsElement, minisecondsGlow, newTime.miniseconds, time.miniseconds);
    updateTimeElement(microsecondsElement, microsecondsGlow, newTime.microseconds, time.microseconds);

    // Update date
    const dateString = now.toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
    dateElement.textContent = dateString;

    // Store current time
    time = newTime;
}

// Update individual time element with animation
function updateTimeElement(element, glowElement, newValue, oldValue) {
    if (!element || !glowElement) return;
    if (newValue !== oldValue) {
        // Add transition class
        element.style.transform = 'scale(1.1)';
        glowElement.style.transform = 'scale(1.1)';

        // Update content
        element.textContent = newValue;
        glowElement.textContent = newValue;

        // Reset transform after animation
        setTimeout(() => {
            element.style.transform = 'scale(1)';
            glowElement.style.transform = 'scale(1)';
        }, 200);
    }
}

// hover effects to time units
function addHoverEffects() {
    const timeUnits = document.querySelectorAll('.time-unit');

    timeUnits.forEach(unit => {
        unit.addEventListener('mouseenter', () => {
            const glow = unit.querySelector('.time-glow');
            if (glow) {
                glow.style.opacity = '0.7';
            }
        });

        unit.addEventListener('mouseleave', () => {
            const glow = unit.querySelector('.time-glow');
            if (glow) {
                glow.style.opacity = '0.5';
            }
        });
    });
}

// Add smooth transitions to time numbers
function addTimeTransitions() {
    const timeNumbers = document.querySelectorAll('.time-number, .time-glow');
    timeNumbers.forEach(element => {
        element.style.transition = 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
    });
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    addHoverEffects();
    addTimeTransitions();
    init();
});

// Handle visibility change to pause/resume when tab is not active
document.addEventListener('visibilitychange', () => {
    if (!document.hidden && mounted) {
        updateClock();
    }
});

// Add keyboard shortcuts for fun interactions
document.addEventListener('keydown', (e) => {
    if (e.code === 'Space') {
        e.preventDefault();
        // Add a fun pulse effect
        const clockDisplay = document.querySelector('.clock-display');
        clockDisplay.style.transform = 'scale(1.02)';
        setTimeout(() => {
            clockDisplay.style.transform = 'scale(1)';
        }, 150);
    }
});

// Add click effect to clock display
document.querySelector('.clock-display').addEventListener('click', () => {
    const clockDisplay = document.querySelector('.clock-display');
    clockDisplay.style.transform = 'scale(0.98)';
    setTimeout(() => {
        clockDisplay.style.transform = 'scale(1)';
    }, 100);
});