import React from "react";
import Filters from "../Filter/Filter";
import ProductGrid from "../Products/ProductGrid";
import "./main.css";

const MainSection = ({ showFilter }) => {
  return (
    <section className="main-section">
      {showFilter && <Filters />}
    <ProductGrid showFilter={showFilter} />
    </section>
  );
};

export default MainSection;