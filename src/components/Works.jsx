import { Work } from "./Work.jsx";
import { work } from "../data.js";

export function Works() {
  return (
    <section id="work">
      <h2>Work Experience</h2>
      {work.map((item) => (
        <Work {...item} />
      ))}
    </section>
  );
}
