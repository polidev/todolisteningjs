import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router";

const TodoPage = lazy(() => import("./pages/todoPage.jsx"));
const ShoppingPage = lazy(() => import("./pages/shoppingPage.jsx"));
const ErrorPage = lazy(() => import("./pages/errorPage.jsx"));
const MusicPlayer = lazy(
  () => import("./components/musicPlayer/musicPlayer.jsx"),
);

const Layout = lazy(() => import("./components/layout/layout.jsx"));

function App() {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route
            path="/"
            element={
              <Layout
                children={
                  <>
                    <TodoPage />
                    <MusicPlayer />
                  </>
                }
              />
            }
          />
          <Route
            path="/shopping"
            element={
              <Layout
                children={
                  <>
                    <ShoppingPage />
                    <MusicPlayer />
                  </>
                }
              />
            }
          />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
