import { useContext } from "react";
import { Routes, Route } from "react-router-dom";

import { CategoriesContext } from "../../contexts/categories.context";
import CategoryPreview from "../categories-preview/categories-preview.component";
import Category from "../category/category.component";

import "./shop.styles.scss";

const Shop = () => {
  const { categoriesMap } = useContext(CategoriesContext);
  return (
    <Routes>
      <Route index element={<CategoryPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};

export default Shop;
