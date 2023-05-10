import React, { createContext, useContext } from 'react';

// Here we define our context. This is what we will pass
// around. It is implicitly a string with a default value.
const LevelContext = createContext("This should be overwritten");

// This is our top level component. Here we declare a provider,
// which is what exposes the value to the lower levels
const LevelOne = () => {

    return (
        <LevelContext.Provider value={"This is the level value"}>
            <LevelTwo></LevelTwo>
        </LevelContext.Provider>
    )

};

// This is an empty component we use as a mid layer to demonstrate
// passing the context multiple layers without explicit props
const LevelTwo = () => {

    return (
        <LevelThree></LevelThree>
    )

};

// Finally we use the context in our third layer down. Notice
// we need a function, and to tell it which context we are
// using
const LevelThree = () => {

    const level = useContext(LevelContext);

    return (
        <>
            <div>
                The level is {level}
            </div>
        </>
    )

};

export default LevelOne;