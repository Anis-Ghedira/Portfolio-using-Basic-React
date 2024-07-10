export function Formation({ image, title, date, location }) {
  return (
    <div className="formation">
      <img src={image} alt={title} />
      <div>
        <h3>{title}</h3>
        <div className="dflex">
          <i class="fa-regular fa-calendar-days px-1"></i>
          <p>{date}</p>
        </div>
        <div className="dflex">
          <i class="fa-solid fa-location-dot px-1"></i>
          <p>{location}</p>
        </div>
      </div>
    </div>
  );
}
