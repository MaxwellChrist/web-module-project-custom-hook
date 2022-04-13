// Build a hook called that takes in a key value and an initialValue.
// Use the code from GP to build the the hook.

import React, { useState } from 'react';

const useLocalStorage = (key, value) => {
    const [newValue, setNewValue] = useState(() => {
        // debugger
        if (localStorage.getItem(key)) {
            return JSON.parse(localStorage.getItem(key))
        }
        localStorage.setItem(key, JSON.stringify(value))
        return value
    })
    const stored = (value) => {
        localStorage.setItem(key, JSON.stringify(value))
        setNewValue(value)
    }
    return [newValue, stored]
}

export default useLocalStorage
