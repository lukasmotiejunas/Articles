import React, { useState, createContext } from "react";
const CounterContext = createContext(null);

function CounterProvider({ children }) {
    const [value, setValue] = useState("home");

    return (
        <CounterContext.Provider value={{ value, setValue }}>
            {children}
        </CounterContext.Provider>
    );
}

export { CounterContext, CounterProvider };
