export const projectsData = [
  {
    projectId: 1,
    name: "Seat Reservation System",
    media: "src/assets/images/seat-reservation-system-preview.png",
    mediaType: "image",
    description:
      "Mi primer gran salto al Full-stack. Es un sistema para reservar asientos donde el usuario elige su sitio, el sistema comprueba que esté libre y guarda la reserva.",
    learning:
      "Aprendí cómo conectar un frontend en React con una base de datos real, y sobre todo, a valorar la consistencia de los datos cuando vienen del servidor.",
    challenges: [
      "Al ser mi primer proyecto, no usaba estados globales y por ello tuve que pasar useStates a través de componentes.",
      "Sincronizar la interfaz para que los asientos cambien de color y estado según lo que responde la base de datos en tiempo real.",
      "Montar mi primera API desde cero con Node y Express, entendiendo cómo se comunican cliente y servidor.",
    ],
    tech: [
      { name: "React", img: "src/assets/icons/reactIcon.svg" },
      { name: "TypeScript", img: "src/assets/icons/typeScriptIcon.svg" },
      { name: "NodeJS", img: "src/assets/icons/nodeJSIcon.svg" },
      { name: "Express", img: "src/assets/icons/ExpressIcon.svg" },
      { name: "MongoDB", img: "src/assets/icons/MongoDBIcon.svg" },
    ],
    GitHub: {
      text: "Github",
      url: "https://github.com/JanitzDePaz/seat-reservation-system",
    },
  },
  {
    projectId: 2,
    name: "Plug In Ecommerce",
    media: "src/assets/images/plug-in-preview.png",
    mediaType: "image",
    description:
      "Este es mi proyecto más grande hasta ahora, una tienda de periféricos. Tuve la idea de hacer un ecommerce por su escalabilidad y he usado este proyecto para probar tecnologías del mundo del desarrollo web",
    learning:
      "En el aprendizaje de este proyecto destaca Spring Boot. Aunque entiendo la lógica y el código de Spring, todavía me cuesta mucho hacerlo desde cero sin apoyo y sé que me queda un mundo por aprender.",
    challenges: [
      "Aprender Spring Boot desde cero. He dado Java en clase, pero pasar de lo básico a Spring es un paso muy grande que estoy dando ahora mismo.",
      "La landing page ha sido un verdadero reto: me costó muchísimo tiempo pelearme con Three.js por los tipos de TS y montar el Typing Test.",
      "Me está costando aprender a hacer el carrito, el no tener un esquema claro de los requisitos ha hecho que sea un dolor de cabeza.",
    ],
    tech: [
      { name: "React Router", img: "src/assets/icons/reactRouterIcon.svg" },
      { name: "TypeScript", img: "src/assets/icons/typeScriptIcon.svg" },
      { name: "Spring Boot", img: "src/assets/icons/springBootIcon.svg" },
      { name: "PostgreSQL", img: "src/assets/icons/postgreSQLIcon.svg" },
      { name: "Zustand", img: "src/assets/icons/zustandIcon.svg" },
      { name: "GSAP", img: "src/assets/icons/gsapIcon.svg" },
      { name: "Vercel", img: "src/assets/icons/vercelIcon.svg" },
      { name: "Render", img: "src/assets/icons/renderIcon.svg" },
      { name: "Neon", img: "src/assets/icons/neonIcon.svg" },
    ],
    GitHub: {
      text: "Github",
      url: "https://github.com/JanitzDePaz/plug-in-ecommerce",
    },
  },
];
