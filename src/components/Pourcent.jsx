export function Pourcent({ title, description, classe }) {
  return (
    <div class="progress">
      <div className={classe}>
        <p>{title}</p>
        <p>{description}</p>
      </div>
    </div>
  );
}
