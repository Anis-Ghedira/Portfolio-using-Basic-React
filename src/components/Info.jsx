export function Info({ image, title, description }) {
  return (
    <li>
      <div className="container">
        <img src={image} alt={title} />
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  );
}
