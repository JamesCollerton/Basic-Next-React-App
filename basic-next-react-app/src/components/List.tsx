import { Literata } from 'next/font/google';
import React from 'react';

// We declare an interface so that TypeScript
// knows what kind of props we are expecting.
interface ListItems {
  items: Array<number>
}

let renderTimes = 1;

// Now we take in our list of items 
const List = (listItems: ListItems) => {

  console.log(`This is render number ${renderTimes}`)
  renderTimes++

  if(listItems.items.length < 5) {
    listItems.items.push(0)
  }

  // Here we map out each of our list items
  // to JSX, which we can later render.
  const listItemsLi = listItems.items.map(num => <li key={num}>{num}</li>)

  return (
    <>
      <div>
        <h1>Our list goes here!</h1>
        {/* Here we render all of our list items */}
        <ul>
          {listItemsLi}
        </ul>
      </div>
    </>
  );
};

// Finally we export our component for use in
// our page.
export default List;