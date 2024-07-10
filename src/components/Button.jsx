export function Button({ children, click, isSelected }) {
  return (
    <button className={isSelected ? "active" : ""} onClick={click}>
      {children}
    </button>
  );
}
