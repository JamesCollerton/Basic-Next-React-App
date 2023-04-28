import React, { FC } from 'react';

// Here we create our list. Notice we need to
// tell React that it is a Functional Component
// in order for it to render.
const List: FC = () => {
  return (
    <>
      {/* We return some JSX code, which is
      then translated into browser-appropriate
      languages */}
      <h1>Our list goes here!</h1>
    </>
  );
};

// Finally we export our component for use in
// our page.
export default List;