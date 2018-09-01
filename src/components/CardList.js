import React from 'react';
import Card from './Card';
import './CardList.css';

const CardList = (props) => {

  const {people,handler} = props;

  const buttonClicked = (e) => {
    handler();
    hideElement(e); 
  }
  const hideElement = (e) => {
    var el = e.target;
    el.classList.add('hidden');
    console.log("E Of Button",);
  }


  return (
    <div id="scrolling" className="card-list-container">
      {
        people.map((person,i) => {
          return (
            <Card
              key={i}
              homeWorld={person.homeworld}
              name={person.name}
              height={person.height}
              gender={person.gender}
              />
          )
        })
      }
      
      <button id="btn" onClick={buttonClicked}>{"See more"}</button>
    </div>
  );
}

export default CardList;