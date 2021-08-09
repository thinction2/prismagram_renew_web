import React from "react";
import { logUserOut } from "../apollo";

const Home = () => {
  return (
    <div>
      <h1>Wellcome we did it!</h1>
      <button onClick={() => logUserOut()}>Log out Now!</button>
    </div>
  );
};

export default Home;
