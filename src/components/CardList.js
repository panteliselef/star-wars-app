import React from 'react';
import Card from './Card';
import './CardList.css';

class CardList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      filmList: []
    }
  }

  render() {
    const {people} = this.props;
    return (
      <div id="scrolling" className="card-list-container">
        {
          people.map((person,i) => {
            var newArr = [];
            
            person.films.map(film => 
              fetch(film).then(response => response.json()).then(data => newArr.push(data.title))
            )
            
            return (
              <Card
                key={i}
                homeWorld={person.homeworld}
                name={person.name}
                height={person.height}
                gender={person.gender}
                films={newArr}
                />
            )
          })
        }
        
      </div>
    );
  }
}

export default CardList;