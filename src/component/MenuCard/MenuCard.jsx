import "./MenuCard.css"

export function MenuCard({menu}) {
  return (
    <>
      {menu.map(({ name, imgSrc, price, qty }) => (
        <div class="card">
          <img class="card-img" src={imgSrc} alt={name} />
          <div class="card-info">
            <div class="card-title">
              <div>
                <h3>{name}</h3>
                <p class="card-description">
                  Rs. {price} for {qty}
                </p>
                <p class="card-description">{name}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
