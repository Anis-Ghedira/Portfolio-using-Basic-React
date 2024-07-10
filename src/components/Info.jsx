export function Info({ image, title, description }) {
  return (
    <li>
      <div className="container">
        <i class={image}></i>
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  );
}
