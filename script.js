document.addEventListener('DOMContentLoaded', () => {
    
    // --- Intersection Observer for Animations ---
    const revealElements = document.querySelectorAll('.scroll-reveal, .fade-in-up');
    
    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const delay = entry.target.style.getPropertyValue('--delay');
                if (delay) {
                    entry.target.style.transitionDelay = `${delay * 0.15}s`;
                }
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    revealElements.forEach(element => {
        revealObserver.observe(element);
    });

    // Auto-trigger hero animations on page load
    setTimeout(() => {
        document.querySelectorAll('.hero .fade-in-up').forEach(el => {
            el.classList.add('active');
        });
    }, 150);


    // --- Alpha Simulator Interactivity ---
    const btnDescend = document.getElementById('btn-descend');
    const simulatorWave = document.getElementById('simulator-wave');
    const waveText = document.getElementById('wave-text');
    let inAlpha = false;

    // We will dynamically alter the SVG path coordinates of the wave to show transition
    const wavePath = document.getElementById('wave-path');
    
    // Default Beta wave configuration: 40 wave cycles, fast and tall
    const betaPath = "M 0 75 Q 10 30 20 75 T 40 75 T 60 75 T 80 75 T 100 75 T 120 75 T 140 75 T 160 75 T 180 75 T 200 75 T 220 75 T 240 75 T 260 75 T 280 75 T 300 75 T 320 75 T 340 75 T 360 75 T 380 75 T 400 75 T 420 75 T 440 75 T 460 75 T 480 75 T 500 75 T 520 75 T 540 75 T 560 75 T 580 75 T 600 75 T 620 75 T 640 75 T 660 75 T 680 75 T 700 75 T 720 75 T 740 75 T 760 75 T 780 75 T 800 75";
    
    // Alpha wave configuration: 10 wave cycles, slower, softer and longer waves
    const alphaPath = "M 0 75 Q 40 10 80 75 T 160 75 T 240 75 T 320 75 T 400 75 T 480 75 T 560 75 T 640 75 T 720 75 T 800 75";

    btnDescend.addEventListener('click', () => {
        if (!inAlpha) {
            inAlpha = true;
            btnDescend.innerText = 'Revino în Beta (Veghe)';
            btnDescend.classList.remove('btn-primary');
            btnDescend.classList.add('btn-secondary');
            
            // Adjust visual waves
            simulatorWave.classList.remove('animate-beta');
            simulatorWave.classList.add('animate-alpha');
            
            // Change path shape dynamically with transition
            wavePath.setAttribute('d', alphaPath);
            
            // Text change
            waveText.style.opacity = 0;
            setTimeout(() => {
                waveText.innerText = 'Starea Alpha (8 - 12 Hz) - Deep Relaxation & Visual Creation';
                waveText.style.color = 'var(--color-purple)';
                waveText.style.opacity = 1;
            }, 300);

            // Screen pulse effect
            document.body.style.boxShadow = 'inset 0 0 120px rgba(139, 92, 246, 0.25)';
            setTimeout(() => {
                document.body.style.boxShadow = 'none';
            }, 1200);
        } else {
            inAlpha = false;
            btnDescend.innerText = 'Inițiază Coborârea în Alpha';
            btnDescend.classList.remove('btn-secondary');
            btnDescend.classList.add('btn-primary');
            
            // Adjust visual waves
            simulatorWave.classList.remove('animate-alpha');
            simulatorWave.classList.add('animate-beta');
            
            // Change path shape dynamically
            wavePath.setAttribute('d', betaPath);
            
            // Text change
            waveText.style.opacity = 0;
            setTimeout(() => {
                waveText.innerText = 'Starea Beta (15 - 30 Hz) - Minte Agitată & Critică';
                waveText.style.color = 'var(--text-secondary)';
                waveText.style.opacity = 1;
            }, 300);
        }
    });


    // --- The 10 Sacred Seconds Timer ---
    const btnTriggerTimer = document.getElementById('btn-trigger-timer');
    const countdownNum = document.getElementById('countdown-num');
    const progressBar = document.getElementById('timer-progress');
    let timerInterval = null;

    btnTriggerTimer.addEventListener('click', () => {
        btnTriggerTimer.disabled = true;
        btnTriggerTimer.innerText = 'Sincronizare cu subconștientul...';
        
        let timeLeft = 10;
        countdownNum.innerText = timeLeft;
        
        // Circle length is 2 * PI * r = 2 * 3.14159 * 85 = ~534
        const totalDash = 534;
        progressBar.style.strokeDashoffset = 0;
        progressBar.style.transition = 'stroke-dashoffset 1s linear';

        timerInterval = setInterval(() => {
            timeLeft--;
            countdownNum.innerText = timeLeft;
            
            // Update dash offset
            const percent = timeLeft / 10;
            const offset = totalDash - (percent * totalDash);
            progressBar.style.strokeDashoffset = offset;

            if (timeLeft === 0) {
                clearInterval(timerInterval);
                
                // End timer state
                btnTriggerTimer.innerText = 'Integrare Completă. Noua Hartă Mentală este Activă.';
                countdownNum.innerText = '✓';
                countdownNum.style.color = 'var(--color-teal)';
                progressBar.style.stroke = 'var(--color-teal)';
                
                // Trigger major ambient glow shift
                const glow = document.querySelector('.glow-2');
                glow.style.transform = 'scale(2.2)';
                glow.style.background = 'radial-gradient(circle, rgba(13, 148, 136, 0.45) 0%, rgba(0,0,0,0) 70%)';
                glow.style.transition = 'transform 2.5s ease, background 2.5s ease';

                setTimeout(() => {
                    glow.style.transform = 'scale(1)';
                    glow.style.background = 'radial-gradient(circle, rgba(139, 92, 246, 0.35) 0%, rgba(0,0,0,0) 70%)';
                }, 4000);

                setTimeout(() => {
                    btnTriggerTimer.disabled = false;
                    btnTriggerTimer.innerText = 'Inițiază Cele 10 Secunde Sacre';
                    countdownNum.innerText = '10';
                    countdownNum.style.color = 'var(--text-primary)';
                    progressBar.style.transition = 'none';
                    progressBar.style.strokeDashoffset = 534;
                    progressBar.style.stroke = 'var(--color-purple)';
                }, 6000);
            }
        }, 1000);
    });

    // --- Interactive relationship visual hover glow ---
    const visualBox = document.querySelector('.relatii-visual');
    const connPath = document.getElementById('connection-path');
    const pulseRing = document.querySelector('.pulse-ring');

    visualBox.addEventListener('mouseenter', () => {
        connPath.style.stroke = 'var(--color-purple)';
        connPath.style.strokeWidth = '4';
        connPath.style.animation = 'dashOffset 6s linear infinite';
        pulseRing.style.animationDuration = '1.5s';
    });

    visualBox.addEventListener('mouseleave', () => {
        connPath.style.stroke = 'rgba(99, 102, 241, 0.2)';
        connPath.style.strokeWidth = '3';
        connPath.style.animation = 'dashOffset 15s linear infinite';
        pulseRing.style.animationDuration = '3s';
    });
});
