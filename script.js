// Solo funcionalidades básicas sin modo edición

document.addEventListener('DOMContentLoaded', function() {
  // Manejo de error de imagen de perfil
  const profileImg = document.querySelector('.foto');
  
  if (profileImg) {
    profileImg.addEventListener('error', function() {
      // Crear un avatar SVG como fallback
      const svgString = `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
          <defs>
            <linearGradient id="avatarGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#4f46e5" />
              <stop offset="100%" stop-color="#7c3aed" />
            </linearGradient>
          </defs>
          <circle cx="50" cy="40" r="20" fill="url(#avatarGradient)" opacity="0.2"/>
          <circle cx="50" cy="100" r="40" fill="url(#avatarGradient)" opacity="0.1"/>
          <circle cx="50" cy="40" r="15" fill="url(#avatarGradient)"/>
          <ellipse cx="50" cy="70" rx="25" ry="20" fill="url(#avatarGradient)"/>
          <text x="50" y="22" text-anchor="middle" fill="white" font-size="12" font-weight="bold">AC</text>
        </svg>
      `;
      
      this.src = 'data:image/svg+xml;base64,' + btoa(svgString);
      this.alt = "Avatar de Aldair Contreras";
      this.style.border = "2px solid #e2e8f0";
    });
  }
  
  // Efecto de carga inicial sutil
  setTimeout(() => {
    const card = document.querySelector('.card');
    card.style.transform = 'scale(1.02)';
    card.style.transition = 'transform 0.3s ease';
    
    setTimeout(() => {
      card.style.transform = 'scale(1)';
    }, 300);
  }, 500);
  
  // Añadir efecto de hover a las tarjetas de contacto
  const contactItems = document.querySelectorAll('.contact-item');
  contactItems.forEach(item => {
    item.addEventListener('mouseenter', function() {
      const icon = this.querySelector('.contact-icon');
      if (icon) {
        icon.style.transform = 'rotate(10deg) scale(1.1)';
        icon.style.transition = 'transform 0.3s ease';
      }
    });
    
    item.addEventListener('mouseleave', function() {
      const icon = this.querySelector('.contact-icon');
      if (icon) {
        icon.style.transform = 'rotate(0) scale(1)';
      }
    });
  });
  
  // Añadir efecto de impresión profesional al cargar
  console.log('%c📄 Currículum Profesional - Aldair Contreras Ramírez', 
    'color: #4f46e5; font-size: 16px; font-weight: bold;');
  console.log('%cDesarrollado con HTML, CSS y JavaScript', 
    'color: #64748b; font-size: 14px;');
});