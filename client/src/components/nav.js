import React from "react";
import { useLightMode } from './hooks/useLightMode';

const Navbar = () => {
  const [lightMode, setLightMode] = useLightMode(false);
  return (
    <nav>
      <h1>Women's World Cup 2019 Player Rankings</h1>
      <div>
        <Lbutton
          onClick={
            e => {
                e.preventDefault();
                setLightMode(!lightMode);
                if(!lightMode) {
                    e.target.textContent = "Dark Mode"
                }
                else 
                    e.target.textContent = "light Mode"
            }
          }
          className={lightMode ? "toggle toggled" : "toggle"}
        >
          Light Mode
        </Lbutton>
      </div>
    </nav>
  );
};
export default Navbar;