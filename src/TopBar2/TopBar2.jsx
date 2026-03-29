// import React from "react";
// import { FiChevronLeft, FiChevronDown } from "react-icons/fi";
// import "./topbar2.css";

// const TopBar2 = () => {
//   return (
//     <div className="topbar-container">
//       <div className="topbar-left">
//         <span className="items">3425 ITEMS</span>

//         <div className="hide-filter">
//           <FiChevronLeft />
//           <span>HIDE FILTER</span>
//         </div>
//       </div>

//       <div className="topbar-right">
//         <span>RECOMMENDED</span>
//         <FiChevronDown />
//       </div>
//     </div>
//   );
// };

// export default TopBar2;


import React, { useState } from "react";
import { FiChevronLeft, FiChevronDown } from "react-icons/fi";
import { FaCheck } from "react-icons/fa";
import "./topbar2.css";

const options = [
  "RECOMMENDED",
  "NEWEST FIRST",
  "POPULAR",
  "PRICE : HIGH TO LOW",
  "PRICE : LOW TO HIGH",
];

const TopBar2 = ({ toggleFilter, showFilter }) => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("RECOMMENDED");

  return (
    <div className="topbar-container">

      {/* LEFT */}
      <div className="topbar-left">
        <span className="items">3425 ITEMS</span>

        <div className="hide-filter" onClick={toggleFilter}>
          <FiChevronLeft />
          <span>{showFilter ? "HIDE FILTER" : "SHOW FILTER"}</span>
        </div>
      </div>

      {/* RIGHT */}
      <div className="topbar-right">
        <div className="dropdown">

          {/* Header */}
          <div
            className="dropdown-header"
            onClick={() => setOpen(!open)}
          >
            <span>{selected}</span>
            <FiChevronDown />
          </div>

          {/* Dropdown */}
          {open && (
            <div className="dropdown-menu">
              {options.map((item) => (
                <div
                  key={item}
                  className="dropdown-item"
                  onClick={() => {
                    setSelected(item);
                    setOpen(false);
                  }}
                >
                  {selected === item && (
                    <FaCheck className="check-icon" />
                  )}
                  <span>{item}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

    </div>
  );
};

export default TopBar2;