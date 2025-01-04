import React from "react";

import MainWrapper from "./main-wrapper";
import Article from "./article";

function Home() {
  console.log("Home rendered");
  return (
    <MainWrapper>
      <Article />
    </MainWrapper>
  );
}

export default Home;
