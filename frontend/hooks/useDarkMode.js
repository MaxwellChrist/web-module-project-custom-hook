// Build a hook that ONLY setups a boolean state value. This value governs if dark mode is on or off.
//  Return the slice of state created and the state modification function.
//  Replace the darkMode state definition with useDarkMode in App.js.

import React, { useState } from 'react';

export const changeMode = (value) => {
    const [darkMode, setDarkMode] = useState(value);
    return [darkMode, setDarkMode]
}