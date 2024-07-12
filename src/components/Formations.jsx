import { Formation } from "./Formation.jsx";
import { formation } from "../data.js";

export function Formations() {
  return (
    <section>
      <h2>Formation</h2>
      <div id="formation">
        {formation.map((item) => (
          <Formation {...item} />
        ))}
      </div>
    </section>
  );
}
