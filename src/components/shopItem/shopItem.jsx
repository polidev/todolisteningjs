import "./shopItem.css";

export default function ShopItem({
  shopTodo,
  shopQuantity,
  toggleShopTodo,
  deleteShopTodo,
  incrementQuantity,
  decrementQuantity,
}) {
  return (
    <>
      <div className="shop-item">
        <input
          type="checkbox"
          id={`shopCheckbox-${shopTodo.id}`}
          checked={shopTodo.completed}
          onChange={() => toggleShopTodo(shopTodo.id)}
        />
        <label
          htmlFor={`shopCheckbox-${shopTodo.id}`}
          id={`shopLabel-${shopTodo.id}`}
        >
          {shopQuantity}
          {shopTodo.text}
        </label>
        <button onClick={() => deleteShopTodo(shopTodo.id)}>Delete</button>
        <button onClick={() => incrementQuantity(shopTodo.id)}>+</button>
        <button onClick={() => decrementQuantity(shopTodo.id)}>-</button>
      </div>
    </>
  );
}
