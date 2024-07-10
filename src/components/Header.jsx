import { adj } from "../data";

function getRandomNumber(number) {
  return Math.floor(Math.random() * (number + 1));
}
const adjective = adj[getRandomNumber(2)];

export function Header() {
  return (
    <header>
      <img src="src/assets/Images/Photo de profil.png" alt="Stylized atom" />
      <h1>Anis Ghedira</h1>
      <h3>Full Stack Web Developer </h3>
      <p>
        {adjective} Engineer with more than six years of experience on a
        multitude of projects, eager to gain more experience in a creative
        environment. <br /> Actually, I am looking for a new and challenging
        position that will make the best use of my acquired skills and
        experience.
      </p>
    </header>
  );
}
