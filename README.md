🏗️ Microfrontends Vite + React

🛠️ Tecnologías Usadas

Vite ⚡

React

Node.js 18.20.7 + npm

📂 Estructura del Proyecto

repos/


├── consumer/

    ├── package.json

    ├── src/

    ├── public/

    └── vite.config.js


├── exposer/

    ├── package.json

    ├── src/

    ├── public/

    └── vite.config.js


🚀 Instalación

Por cada microfrontend instala las dependencias con npm i

📦 Construcción para desarrollo

Primero Para generar los archivos estáticos y poder ser conumidos desde la app consumer se debe ejecutar en la app que expone
npm run build
npm run preview

Por último en la app que consume
npm run dev


📌 Notas

📦 Correro en desarrollo y tener hot reload en la app que expone
npm run dev (los cambios no se veran en la app que consume) para ver los cambios ejecutar
npm run build
npm run preview
