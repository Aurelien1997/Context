import React from 'react'
import './navbar.css'
import { useState } from 'react'

function Navbar({setToggleStateFromParent}) {

  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
    setToggleStateFromParent(index);
  };

  return (
    <div className="heading">
      <button
        className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
        onClick={() => toggleTab(1)}
      >
        Text
      </button>
      <button
        className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
        onClick={() => toggleTab(2)}
      >
        Carte
      </button>
    </div>
  )
}

export default Navbar
