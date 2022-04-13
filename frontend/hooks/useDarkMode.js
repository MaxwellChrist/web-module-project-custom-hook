// Build a hook that ONLY setups a boolean state value. This value governs if dark mode is on or off.
//  Return the slice of state created and the state modification function.
//  Replace the darkMode state definition with useDarkMode in App.js.
import React, { useState } from 'react';
import useLocalStorage from './useLocalStorage';

export const changeMode = (value) => {
    const [darkMode, setDarkMode] = useLocalStorage("darkMode", value)
    return [darkMode, setDarkMode]
}