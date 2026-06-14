import ShopInput from "../components/shopInput/shopInput.jsx";
import ShopItem from "../components/shopItem/shopItem.jsx";
import useShopList from "../hooks/useShopList.jsx";

export default function ShoppingPage() {
  const {
    shopList,
    addShopTodo,
    toggleShopTodo,
    deleteShopTodo,
    incrementQuantity,
    decrementQuantity,
  } = useShopList();

  const completed = shopList.filter((t) => t.completed).length;
  const total = shopList.length;

  return (
    <>
      <ShopInput addShopTodo={addShopTodo} />
      <section>
        {shopList.map((shopTodo) => (
          <ShopItem
            key={shopTodo.id}
            shopTodo={shopTodo}
            shopQuantity={shopTodo.quantity}
            toggleShopTodo={toggleShopTodo}
            deleteShopTodo={deleteShopTodo}
            incrementQuantity={incrementQuantity}
            decrementQuantity={decrementQuantity}
          />
        ))}
      </section>

      <section>
        {total > 0 && (
          <p>
            {completed} of {total} items complete
          </p>
        )}
      </section>
    </>
  );
}
