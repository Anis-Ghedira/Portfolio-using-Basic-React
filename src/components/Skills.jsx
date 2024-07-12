import { Pourcent } from "./Pourcent.jsx";
import { skills } from "../data.js";
import { Button } from "./Button.jsx";
import { useState } from "react";

export function Skills() {
  const [selectedTopic, setSelectedTopic] = useState();

  function clickHandler(selectedButton) {
    setSelectedTopic(selectedButton);
  }

  return (
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
  );
}
