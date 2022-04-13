import React, { useState } from 'react';

const useLocalStorage = (key, value) => {
    const [newValue, setNewValue] = useState(() => {
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
