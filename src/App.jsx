import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router";

const TodoPage = lazy(() => import("./pages/todoPage.jsx"));
const ShoppingPage = lazy(() => import("./pages/shoppingPage.jsx"));
const ErrorPage = lazy(() => import("./pages/errorPage.jsx"));

function App() {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<TodoPage />} />
          <Route path="/shopping" element={<ShoppingPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
