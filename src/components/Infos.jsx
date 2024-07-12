import { Info } from "./Info.jsx";
import { infoTab } from "../data.js";

export function Infos() {
  return (
    <section id="contact-us">
      <h2>Contact Us</h2>
      <ul>
        {infoTab.map((item) => (
          <Info {...item} />
        ))}
      </ul>
    </section>
  );
}
