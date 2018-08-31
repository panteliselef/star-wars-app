import React from 'react';
import Card from './Card';
import './CardList.css';
import Scroll from './Scroll';

const CardList = (props) => {



  const {people} = props;
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
              />
          )
        })
      }
    </div>
  );
}

export default CardList;