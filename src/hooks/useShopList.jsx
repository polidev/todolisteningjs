import useLocalStorage from "./useLocalStorage.jsx";

export default function useShopList() {
  const [shopList, setShopList] = useLocalStorage("shopList", []);

  function addShopTodo(text, quantity = 1) {
    setShopList((prev) => [
      ...prev,
      {
        id: crypto.randomUUID(),
        text,
        completed: false,
        quantity: Number(quantity),
      },
    ]);
  }

  function toggleShopTodo(id) {
    setShopList((prev) =>
      prev.map((shopTodo) =>
        shopTodo.id === id
          ? { ...shopTodo, completed: !shopTodo.completed }
          : shopTodo,
      ),
    );
  }

  function deleteShopTodo(id) {
    setShopList((prev) => prev.filter((shopTodo) => shopTodo.id !== id));
  }

  function incrementQuantity(id) {
    setShopList((prev) =>
      prev.map((shopTodo) =>
        shopTodo.id === id
          ? { ...shopTodo, quantity: shopTodo.quantity + 1 }
          : shopTodo,
      ),
    );
  }

  function decrementQuantity(id) {
    setShopList((prev) =>
      prev.map((shopTodo) =>
        shopTodo.id === id
          ? { ...shopTodo, quantity: shopTodo.quantity - 1 }
          : shopTodo,
      ),
    );
  }

  return {
    shopList,
    addShopTodo,
    toggleShopTodo,
    deleteShopTodo,
    incrementQuantity,
    decrementQuantity,
  };
}
