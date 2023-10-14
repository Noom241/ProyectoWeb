// header-loader.js

// Función para cargar el encabezado y los estilos
function loadHeader() {
  // Cargar el encabezado
  fetch('../encabezado/encabezado.html')
      .then(response => response.text())
      .then(template => {
          const tempDiv = document.createElement('div');
          tempDiv.innerHTML = template;
          const headerTemplate = tempDiv.querySelector('#header-template');
          const headerClone = document.importNode(headerTemplate.content, true);
          const headerContainer = document.getElementById('header-container');
          headerContainer.appendChild(headerClone);
      });

  // Cargar los estilos
  const styleLink = document.createElement('link');
  styleLink.rel = 'stylesheet';
  styleLink.href = '../encabezado/styles.css'; // Ruta al archivo de estilos
  document.head.appendChild(styleLink);
}

// Llama a la función para cargar el encabezado y los estilos
loadHeader();
