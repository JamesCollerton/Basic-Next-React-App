import React, { useRef } from 'react';

const Refs = () => {

    // Here we declare our ref. As we are using Typescript
    // and initialising with null we need to tell it what
    // type of ref we are expecting. The initialising with
    // null is a common pattern and is updated below.
    const myRef = useRef<HTMLInputElement>(null);

    // An event handler used to focus on the input when
    // we press the button
    const handleClick = () => {
        myRef.current?.focus()
    }

    return (
        <>
            <button onClick={handleClick}>
                Press to focus!
            </button>
            {/* Here we pass in the reference and can
            use it to focus */}
            <input ref={myRef}></input>
        </>
    )

};

// Finally we export our component for use in
// our page.
export default Refs;