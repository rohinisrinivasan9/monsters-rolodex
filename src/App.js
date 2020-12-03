
import React, { Component } from 'react';

import { CardList } from './components/card-list/card-list.components';
import './App.css';
import { SearchBox } from './components/search-box/search-box.component';

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: ''
    };

    // this bind feature can be used if we dont wanna use the arrow function
    //this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({
        monsters: users
      }));
  }

  handleChange = (e) => {
    this.setState({searchField: e.target.value});
    //console.log('Testing values');
  }

  render() {
    const {monsters, searchField} = this.state;
    const filteredMonsters = monsters.filter(beast => 
      beast.name.toLowerCase().includes(searchField.toLowerCase()));

    return (
      <div className='App'>
        <h1>Monsters Rolodex</h1>
        <SearchBox 
          placeholder = 'Search Monsters'
          handleChange = {this.handleChange}
        />
        <CardList monsters={filteredMonsters}>
          {/* children is whatever is used within these brackets of the component
          props is whatever is passed into it like the monsters = this.state thing 
          for this code, we are passing monsters as a prop
          */}

        </CardList>

      </div>
    )
  }
}

export default App;
