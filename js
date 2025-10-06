const suj = [
  "El perro de mi vecina",
  "Los estudiantes del grupo 4B",
  "Mi mejor amigo",
  "El sol",
  "Las flores del jardín",
  "Mi computadora",
  "Los maestros de la preparatoria",
  "El libro que compré ayer",
  "Los niños del parque",
  "La lluvia de anoche",
];

const verbo = [
  "Correr",
  "Saltar",
  "Comer",
  "Dormir",
  "Estudiar",
  "Leer",
  "Escribir",
  "Cantar",
  "Jugar",
  "Bailar",
];

const comp = [
  "en el parque",
  "con sus amigos",
  "toda la noche",
  "en la escuela",
  "debajo de la mesa",
  "en su casa",
  "con mucha alegría",
  "en el campo",
  "después de clases",
  "en la cocina",
];

function generarFraseAleatoria() {
  const sujeto = suj[Math.floor(Math.random() * suj.length)];
  const verboAleatorio = verbo[Math.floor(Math.random() * verbo.length)];
  const complemento = comp[Math.floor(Math.random() * comp.length)];
  return `${sujeto} ${verboAleatorio} ${complemento}`;
}

const boton = document.getElementById("btn");
const texto = document.getElementById("frase");

boton.addEventListener("click", () => {
  texto.textContent = generarFraseAleatoria();
});
