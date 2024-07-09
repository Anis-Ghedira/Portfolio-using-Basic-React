import { Header } from "./components/Header.jsx";
import { Info } from "./components/Info.jsx";
import { infoTab } from "./components/data.js";

function App() {
  return (
    <div>
      <Header />
      <main>
        <section id="contact-us">
          <h2>Contact Us</h2>
          <ul>
            <Info {...infoTab[0]}></Info>
            <Info {...infoTab[1]}></Info>
            <Info {...infoTab[2]}></Info>
            <Info {...infoTab[3]}></Info>
          </ul>
        </section>
        {/* <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton>anis</TabButton>
            <TabButton>ahmed</TabButton>
            <TabButton>joud</TabButton>
            <TabButton>ons</TabButton>
          </menu>
        </section> */}
      </main>
    </div>
  );
}

export default App;
