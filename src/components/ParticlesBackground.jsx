import React, { useEffect, useRef } from 'react';

export const ParticlesBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let particlesArray = [];
    const numberOfParticles = Math.min(Math.floor(window.innerWidth / 15), 100); // Responsive amount

    let mouse = {
      x: null,
      y: null,
      radius: 120
    };

    const handleMouseMove = (event) => {
      mouse.x = event.clientX;
      mouse.y = event.clientY;
    };

    window.addEventListener('mousemove', handleMouseMove);

    class Particle {
      constructor(x, y, directionX, directionY, size, color) {
        this.x = x;
        this.y = y;
        this.directionX = directionX;
        this.directionY = directionY;
        this.size = size;
        this.color = color;
        this.baseX = this.x;
        this.baseY = this.y;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
        ctx.fillStyle = this.color;
        ctx.fill();
      }

      update() {
        if (this.x > canvas.width || this.x < 0) {
          this.directionX = -this.directionX;
        }
        if (this.y > canvas.height || this.y < 0) {
          this.directionY = -this.directionY;
        }

        // Move particle
        this.x += this.directionX * 0.5;
        this.y += this.directionY * 0.5;

        // Mouse interactivity (Repel)
        if (mouse.x != null && mouse.y != null) {
          let dx = mouse.x - this.x;
          let dy = mouse.y - this.y;
          let distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < mouse.radius) {
            const forceDirectionX = dx / distance;
            const forceDirectionY = dy / distance;
            const maxDistance = mouse.radius;
            const force = (maxDistance - distance) / maxDistance;
            
            this.x -= forceDirectionX * force * 3;
            this.y -= forceDirectionY * force * 3;
          }
        }

        this.draw();
      }
    }

    const init = () => {
      particlesArray = [];
      for (let i = 0; i < numberOfParticles; i++) {
        let size = (Math.random() * 2) + 1;
        let x = (Math.random() * ((window.innerWidth - size * 2) - (size * 2)) + size * 2);
        let y = (Math.random() * ((window.innerHeight - size * 2) - (size * 2)) + size * 2);
        let directionX = (Math.random() * 2) - 1;
        let directionY = (Math.random() * 2) - 1;
        let color = 'rgba(250, 204, 21, 0.4)';
        particlesArray.push(new Particle(x, y, directionX, directionY, size, color));
      }
    };

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
      
      for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
      }
      connect();
    };

    // Connect particles with lines if they are close enough
    const connect = () => {
      let opacityValue = 1;
      for (let a = 0; a < particlesArray.length; a++) {
        for (let b = a; b < particlesArray.length; b++) {
          let distance = ((particlesArray[a].x - particlesArray[b].x) * (particlesArray[a].x - particlesArray[b].x)) + 
                         ((particlesArray[a].y - particlesArray[b].y) * (particlesArray[a].y - particlesArray[b].y));
          
          if (distance < (canvas.width / 9) * (canvas.height / 9)) {
            opacityValue = 1 - (distance / 15000);
            ctx.strokeStyle = 'rgba(250, 204, 21, ' + (opacityValue * 0.5) + ')';
            ctx.lineWidth = 0.8;
            ctx.beginPath();
            ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
            ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
            ctx.stroke();
          }
        }
      }
    };

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      init();
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: -1, // Behind everything
        pointerEvents: 'none', // So it doesn't block clicks/hover on the real website
      }}
    />
  );
};
