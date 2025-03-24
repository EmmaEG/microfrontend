# 🏗️ Microfrontends con Vite + React

## 🛠️ Tecnologías Base Usadas
- [Vite](https://vitejs.dev/) ⚡
- [React](https://react.dev/)
- [Node.js](https://nodejs.org/) 18.20.7+ npm

Este repositorio contiene dos microfrontends desarrollados con **Vite + React**. Cada microfrontend es independiente y puede ejecutarse por separado.

## 📂 Estructura del Proyecto
```
mi-repo/
├── microfrontend1/
│   ├── package.json
│   ├── src/
│   ├── public/
│   └── vite.config.js
├── microfrontend2/
│   ├── package.json
│   ├── src/
│   ├── public/
│   └── vite.config.js
├── package.json (si usas npm workspaces)
├── README.md
└── .gitignore
```

## 🚀 Instalación
Por cada microfrontend, instala las dependencias:
```sh
npm install
```

## 📦 Construcción para desarrollo

### 🏗️ Generar archivos estáticos para la app que expone
Para que la aplicación pueda ser consumida, primero se debe ejecutar en la app que expone:
```sh
npm run build
npm run preview
```

### 🏃‍♂️ Ejecutar la app que consume
Por último, en la app que consume:
```sh
npm run dev
```

## 📌 Nota!

### 📦 Correr en desarrollo y tener hot reload en la app que expone
Si quieres ver los cambios en la app que expone sin necesidad de hacer build manualmente:
```sh
npm run dev
```
⚠️ **Los cambios no se verán en la app que consume**.

Para reflejar los cambios en la app que consume, debes ejecutar nuevamente:
```sh
npm run build
npm run preview
```

