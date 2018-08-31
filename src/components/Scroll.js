import React from 'react';
import './CardList.css'

class Scroll extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: false,
      hasMore: true,
      isLoading: false,
      users: [],
    };
  }

  // componentDidMount() {
  //   document.getElementById('scrolling').addEventListener('scroll', this.handleScroll);
  // }

  handleScroll = () => {
    var elmnt = document.getElementById("scrolling");
    var x = elmnt.scrollLeft;
    var y = elmnt.scrollTop;
    console.log(y);
  }


  render() {
    return (
      <div className="card-list-container">
        {this.props.children}
      </div>
    );

  }
}

export default Scroll;