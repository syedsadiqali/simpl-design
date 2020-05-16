import React, { useState, useEffect } from "react";

import { bottomNavigation } from "./icons";
import { IconElements } from "./Utils/iconUtil";

import "./App.css";
import HomeContainer from "./containers/HomeContainer";
import TabUnderConstruction from "./containers/TabUnderConstruction";

function App() {
  // loading state
  const [loading, setLoading] = useState(true);

  // tab active state
  const [tabActive, setTabActive] = useState("Home");

  // loading animation mock timer (for reveal animation)
  useEffect(() => {
    let timer = setTimeout(() => setLoading(false), 1000);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <>
      {loading ? (
        <div className="loader"></div>
      ) : (
        <>
          {tabActive === "Home" ? (
            <HomeContainer />
          ) : (
            <TabUnderConstruction activeTab={tabActive} />
          )}
          <footer className="fixed-bottom">
            <IconElements
              iconsArray={bottomNavigation}
              bottomNavigation={true}
              setTabActive={setTabActive}
              active={tabActive}
            />
          </footer>
        </>
      )}
    </>
  );
}

export default App;
