import React from "react";

import GifListContaainer from "./GifListContainer"

import NavBar from "./NavBar";

// the App component should render out the GifListContainer component

function App() {
  return (
    <div>
      <NavBar color="black" title="Giphy Search" />
      <GifListContaainer />
    </div>
  );
}

export default App;
