import React from "react";
import Common from "./Common";
import Service from "./Service";
import Contact from "./Contact";

function Home() {
  return (
    <div>
      <Common
        name="Grow your business with"
        visit="/Service"
        btname="Get Started"
      />
      <Service />
      <Contact />
    </div>
  );
}

export default Home;
