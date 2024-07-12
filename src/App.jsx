import { useState } from "react";
import { Header } from "./components/Header.jsx";
import { Info } from "./components/Info.jsx";
import { Button } from "./components/Button.jsx";
import { infoTab } from "./data.js";
import { Pourcent } from "./components/Pourcent.jsx";
import { skills } from "./data.js";
import { Work } from "./components/Work.jsx";
import { work } from "./data.js";
import { Formation } from "./components/Formation.jsx";
import { formation } from "./data.js";

function App() {
  const [selectedTopic, setSelectedTopic] = useState();

  function clickHandler(selectedButton) {
    setSelectedTopic(selectedButton);
  }

  return (
    <>
      <Header />
      <main>
        <section id="details">
          <h2>Skills</h2>
          <menu>
            <Button
              isSelected={selectedTopic === "developer"}
              click={() => clickHandler("developer")}
            >
              Developer Tools
            </Button>
            <Button
              isSelected={selectedTopic === "civil"}
              click={() => clickHandler("civil")}
            >
              Civil Tools
            </Button>
          </menu>
          {!selectedTopic ? (
            <p className="anime">Please click a button</p>
          ) : (
            <>
              {skills[selectedTopic].map((item) => (
                <Pourcent {...item} />
              ))}
            </>
          )}
        </section>
        <section id="work">
          <h2>Work Experience</h2>
          {work.map((item) => (
            <Work {...item} />
          ))}
        </section>

        <section>
          <h2>Formation</h2>
          <div id="formation">
            {formation.map((item) => (
              <Formation {...item} />
            ))}
          </div>
        </section>

        <section id="contact-us">
          <h2>Contact Us</h2>
          <ul>
            {infoTab.map((item) => (
              <Info {...item} />
            ))}
          </ul>
        </section>
      </main>
    </>
  );
}

export default App;
