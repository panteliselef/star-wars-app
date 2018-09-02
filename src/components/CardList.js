import React from 'react';
import Card from './Card';
import './CardList.css';

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
              gender={person.gender}
              films={person.films}
              />
          )
        })
      }
      
    </div>
  );
}

export default CardList;