import React from "react";
import { FiChevronDown } from "react-icons/fi";

import "./filter.css";

const Filters = () => {
  return (
    <aside className="filters">
    

      <div className="filter-item">
        <input type="checkbox" />
        <label>CUSTOMIZABLE</label>
      </div>

      <div className="filter-group">
        <p>IDEAL FOR</p>
         <FiChevronDown/>
        <span>All</span>
      </div>

      <div className="filter-group">
        <p>OCCASION</p>
         <FiChevronDown />
        <span>All</span>
      </div>

      <div className="filter-group">
        <p>WORK</p>
         <FiChevronDown />
        <span>All</span>
      </div>

      <div className="filter-group">
        <p>FABRIC</p>
         <FiChevronDown />
        <span>All</span>
      </div>

      <div className="filter-group">
        <p>SEGMENT</p>
         <FiChevronDown />
        <span>All</span>
      </div>

       <div className="filter-group">
        <p>SUITABLE FOR</p>
         <FiChevronDown />
        <span>All</span>
      </div>

       <div className="filter-group">
        <p>RAW MATERIALS</p>
         <FiChevronDown />
        <span>All</span>
      </div>

       <div className="filter-group">
        <p>PATTERN</p>
         <FiChevronDown />
        <span>All</span>
      </div>
    </aside>
  );
};

export default Filters;