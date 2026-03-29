// import React from "react";
// import { FiChevronDown } from "react-icons/fi";

// import "./filter.css";

// const Filters = () => {
//   return (
//     <aside className="filters">
    

//       <div className="filter-item">
//         <input type="checkbox" />
//         <label>CUSTOMIZABLE</label>
//       </div>

//       <div className="filter-group">
//         <p>IDEAL FOR</p>
//          <FiChevronDown/>
//         <span>All</span>
//       </div>

//       <div className="filter-group">
//         <p>OCCASION</p>
//          <FiChevronDown />
//         <span>All</span>
//       </div>

//       <div className="filter-group">
//         <p>WORK</p>
//          <FiChevronDown />
//         <span>All</span>
//       </div>

//       <div className="filter-group">
//         <p>FABRIC</p>
//          <FiChevronDown />
//         <span>All</span>
//       </div>

//       <div className="filter-group">
//         <p>SEGMENT</p>
//          <FiChevronDown />
//         <span>All</span>
//       </div>

//        <div className="filter-group">
//         <p>SUITABLE FOR</p>
//          <FiChevronDown />
//         <span>All</span>
//       </div>

//        <div className="filter-group">
//         <p>RAW MATERIALS</p>
//          <FiChevronDown />
//         <span>All</span>
//       </div>

//        <div className="filter-group">
//         <p>PATTERN</p>
//          <FiChevronDown />
//         <span>All</span>
//       </div>
//     </aside>
//   );
// };

// export default Filters;



import React, { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import "./filter.css";

const Filters = () => {
  const [open, setOpen] = useState(null);

  const toggle = (section) => {
    setOpen(open === section ? null : section);
  };

  return (
    <aside className="filters">

      {/* CUSTOMIZABLE */}
      <div className="filter-item">
        <input type="checkbox" />
        <label>CUSTOMIZABLE</label>
      </div>

      {/* IDEAL FOR */}
      <div className="filter-group">
        <div className="filter-header" onClick={() => toggle("ideal")}>
          <p>IDEAL FOR</p>
          {open === "ideal" ? <FiChevronUp /> : <FiChevronDown />}
        </div>
        <span>All</span>

        {open === "ideal" && (
          <div className="filter-options">
            <div className="checkbox-row"><input type="checkbox" /><label>Men</label></div>
            <div className="checkbox-row"><input type="checkbox" /><label>Women</label></div>
            <div className="checkbox-row"><input type="checkbox" /><label>Baby & Kids</label></div>
          </div>
        )}
      </div>

      {/* OCCASION */}
      <div className="filter-group">
        <div className="filter-header" onClick={() => toggle("occasion")}>
          <p>OCCASION</p>
          {open === "occasion" ? <FiChevronUp /> : <FiChevronDown />}
        </div>
        <span>All</span>

        {open === "occasion" && (
          <div className="filter-options">
            <div className="checkbox-row"><input type="checkbox" /><label>Casual</label></div>
            <div className="checkbox-row"><input type="checkbox" /><label>Party</label></div>
          </div>
        )}
      </div>

      {/* WORK */}
      <div className="filter-group">
        <div className="filter-header" onClick={() => toggle("work")}>
          <p>WORK</p>
          {open === "work" ? <FiChevronUp /> : <FiChevronDown />}
        </div>
        <span>All</span>

        {open === "work" && (
          <div className="filter-options">
            <div className="checkbox-row"><input type="checkbox" /><label>Office</label></div>
            <div className="checkbox-row"><input type="checkbox" /><label>Outdoor</label></div>
          </div>
        )}
      </div>

      {/* FABRIC */}
      <div className="filter-group">
        <div className="filter-header" onClick={() => toggle("fabric")}>
          <p>FABRIC</p>
          {open === "fabric" ? <FiChevronUp /> : <FiChevronDown />}
        </div>
        <span>All</span>

        {open === "fabric" && (
          <div className="filter-options">
            <div className="checkbox-row"><input type="checkbox" /><label>Cotton</label></div>
            <div className="checkbox-row"><input type="checkbox" /><label>Silk</label></div>
            <div className="checkbox-row"><input type="checkbox" /><label>Wool</label></div>
          </div>
        )}
      </div>

      {/* SEGMENT */}
      <div className="filter-group">
        <div className="filter-header" onClick={() => toggle("segment")}>
          <p>SEGMENT</p>
          {open === "segment" ? <FiChevronUp /> : <FiChevronDown />}
        </div>
        <span>All</span>

        {open === "segment" && (
          <div className="filter-options">
            <div className="checkbox-row"><input type="checkbox" /><label>Premium</label></div>
            <div className="checkbox-row"><input type="checkbox" /><label>Budget</label></div>
          </div>
        )}
      </div>

      {/* SUITABLE FOR */}
      <div className="filter-group">
        <div className="filter-header" onClick={() => toggle("suitable")}>
          <p>SUITABLE FOR</p>
          {open === "suitable" ? <FiChevronUp /> : <FiChevronDown />}
        </div>
        <span>All</span>

        {open === "suitable" && (
          <div className="filter-options">
            <div className="checkbox-row"><input type="checkbox" /><label>Summer</label></div>
            <div className="checkbox-row"><input type="checkbox" /><label>Winter</label></div>
          </div>
        )}
      </div>

      {/* RAW MATERIALS */}
      <div className="filter-group">
        <div className="filter-header" onClick={() => toggle("raw")}>
          <p>RAW MATERIALS</p>
          {open === "raw" ? <FiChevronUp /> : <FiChevronDown />}
        </div>
        <span>All</span>

        {open === "raw" && (
          <div className="filter-options">
            <div className="checkbox-row"><input type="checkbox" /><label>Organic</label></div>
            <div className="checkbox-row"><input type="checkbox" /><label>Synthetic</label></div>
          </div>
        )}
      </div>

      {/* PATTERN */}
      <div className="filter-group">
        <div className="filter-header" onClick={() => toggle("pattern")}>
          <p>PATTERN</p>
          {open === "pattern" ? <FiChevronUp /> : <FiChevronDown />}
        </div>
        <span>All</span>

        {open === "pattern" && (
          <div className="filter-options">
            <div className="checkbox-row"><input type="checkbox" /><label>Plain</label></div>
            <div className="checkbox-row"><input type="checkbox" /><label>Printed</label></div>
          </div>
        )}
      </div>

    </aside>
  );
};

export default Filters;