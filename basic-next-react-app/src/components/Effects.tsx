import React, { useEffect } from 'react';

const Effects = () => {

    // This is how we declare a function that
    // will be executed post-render.
    useEffect(() => {
        console.log("This will render second")
    });

    // This is executed before/ as part of the 
    // rendering process
    console.log("This will render first")

    // Here we arbitrarily render something
    return (
        <>
            <div>
                For rendering effects
            </div>
        </>
    )

};

export default Effects;