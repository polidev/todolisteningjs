import "./shopInput.css";

export default function ShopInput({ addShopTodo }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    const shopInput = document.getElementById("shop-input");
    console.log(shopInput.value.trim());

    const shopQuantity = document.getElementById("shop-quantity");
    console.log(shopQuantity.value.trim());

    addShopTodo(shopInput.value.trim(), shopQuantity.value.trim());

    shopInput.value = "";
    shopQuantity.value = "";
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSubmit(e);
    }
  };

  return (
    <>
      <form id="shop-form" onSubmit={handleSubmit}>
        <input
          id="shop-input"
          type="text"
          placeholder="What needs to be done?"
          onKeyDown={handleKeyDown}
          required
        />
        <input
          id="shop-quantity"
          type="number"
          placeholder="Quantity"
          min="1"
          defaultValue="1"
          required
        />
        <button type="submit">+ Add</button>
      </form>
    </>
  );
}
