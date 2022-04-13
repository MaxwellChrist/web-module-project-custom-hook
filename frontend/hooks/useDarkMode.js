import React, { useState } from 'react';
import useLocalStorage from './useLocalStorage';

export const changeMode = (value) => {
    const [darkMode, setDarkMode] = useLocalStorage("darkMode", value)
    return [darkMode, setDarkMode]
}