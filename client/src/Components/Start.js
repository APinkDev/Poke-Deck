import React from "react";
import { Link } from "react-router-dom";

const Start = () => {
  return (
    <div>
      <div>
        <div>
          <h2>
           Howdy! you're welcome.
          </h2>
        </div>

        <div>
          <h1>Poke Deck</h1>
          <Link to="/home">
            <img src="https://w7.pngwing.com/pngs/661/707/png-transparent-pokemon-sun-and-moon-pokemon-black-white-pokemon-diamond-and-pearl-pokemon-x-and-y-the-pokemon-company-others-text-rectangle-logo-thumbnail.png" alt="startLogo"></img>
          </Link>
          <h1>Lets go!</h1>
        </div>
      </div>
    </div>
  );
};

export default Start;