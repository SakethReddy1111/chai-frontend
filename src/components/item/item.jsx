export const Item = ({ product, i }) => {
  return (
    <div className="items">
      <div className="detailsDiv">
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        <div className="priceDiv">
          ${product.price} <span>In Stock</span>
        </div>
      </div>
      <div className="imgDiv">
        <img src={product.img} alt="" width={"80%"} />
      </div>
    </div>
  );
};
