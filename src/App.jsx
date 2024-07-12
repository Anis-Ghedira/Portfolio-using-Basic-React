import { Header } from "./components/Header.jsx";
import { Skills } from "./components/Skills.jsx";
import { Works } from "./components/Works.jsx";
import { Formation } from "./components/Formations.jsx";
import { Infos } from "./components/Infos.jsx";

function App() {
  return (
    <>
      <Header />
      <main>
        <Skills />
        <Works />
        <Formation />
        <Infos />
      </main>
    </>
  );
}

export default App;
