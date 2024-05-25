import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../layout/Layout";
import CatalogPage from "../pages/CatalogPage";
import CreatePage from "../pages/CreatePage";
import EditPage from "../pages/EditPage";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import ShowPage from "../pages/ShowPage";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/catalog" element={<CatalogPage />} />
          <Route path="/catalog/show/:id" element={<ShowPage />} />
          <Route path="/catalog/create" element={<CreatePage />} />
          <Route path="/catalog/edit/:id" element={<EditPage />} />
          <Route path="/logout" element={<div></div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
