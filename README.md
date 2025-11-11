# Ejercicio 5: Proyecto con Express

Proyecto generado con Express Generator que muestra una lista de elementos (con imágenes y texto) en la página inicial y tiene un botón para login; al pulsarlo te redirige a la página de login.

## Estructura del proyecto

ejercicio5-node/
├── routes/
│ ├── index.js # Ruta principal
│ └── login.js # Ruta de login
├── views/
│ ├── index.ejs # Vista principal
│ └── login.ejs # Vista de login
└── public/ # Carpeta para recursos estáticos


## ¿Cómo probarlo?

1. Cuando tengas Node.js y Express Generator instalado, clona este repositorio:
git clone https://github.com/Richante/ejercicio5-node.git
cd ejercicio5-node


2. Genera el proyecto base con express-generator:
npx express-generator --view=ejs .


3. Instala las dependencias:
npm install


4. Arranca el servidor:
npm start


5. Abre en tu navegador: `http://localhost:3000`

## Opcional
- Añade tus propias imágenes en la carpeta `/public/images`.
"Commit changes"

Resumen de la estructura final
Después de seguir estos pasos, tu repositorio tendrá:

ejercicio5-node/
├── routes/
│   ├── index.js
│   └── login.js
├── views/
│   ├── index.ejs
│   └── login.ejs
├── public/
│   └── .gitkeep
└── README.md
