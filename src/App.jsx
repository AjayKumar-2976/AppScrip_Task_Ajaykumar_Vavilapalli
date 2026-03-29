// import { BrowserRouter, Routes, Route } from "react-router-dom";

// import Header from "./components/Header/Header";
// import Hero from "../src/Hero/Hero"
// import MainSection from "./MainSection/MainSection";
// import TopBar2 from "./TopBar2/TopBar2";
// import Footer from "./Footer/Footer";

// function App() {
//   return (
//    <>
   
//    <Header/>
//    <Hero/>
//    <TopBar2/>
//    <MainSection/>
//    <Footer/>
//    </>
//   );
// }

// export default App;


import React, { useState } from "react";

import Header from "./components/Header/Header";
import Hero from "./Hero/Hero";
import TopBar2 from "./TopBar2/TopBar2";
import MainSection from "./MainSection/MainSection";
import Footer from "./Footer/Footer";

function App() {
  const [showFilter, setShowFilter] = useState(true);

  return (
    <>
      <Header />
      <Hero />

      <TopBar2
        toggleFilter={() => setShowFilter(!showFilter)}
        showFilter={showFilter}
      />

      <MainSection showFilter={showFilter} />

      <Footer />
    </>
  );
}

export default App;

