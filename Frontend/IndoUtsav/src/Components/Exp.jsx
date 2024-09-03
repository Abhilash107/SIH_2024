import React, { useContext } from 'react';
import { ThemeContext } from '../Theme/ThemeContext';
function Exp() {

    const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div>
      <p>Current theme: {theme}</p>
      <button onClick={toggleTheme}>Toggle theme</button>
    </div>
  )
}

export default Exp
