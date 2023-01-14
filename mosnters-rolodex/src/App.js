import logo from './logo.svg';
import { Component } from 'react';
import './App.css';
import React from 'react'
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component'
class App  extends Component {

  constructor(){
   
    super();

    this.state = {
     monsters: [],
     searchFeild: ''
    };
  }

  componentDidMount() {
    
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then( (users)  => this.setState( () => {
      return {monsters: users }
    } ))
  }

  onSearchChange = (event) => {
 
    const searchFeild = event.target.value.toLocaleLowerCase();
    
    this.setState( 
      () => 
      { return { searchFeild : searchFeild  } },  )

    }

render (){
 const { monsters, searchFeild} = this.state 
 const {onSearchChange} = this 

  const filteredMonsters = monsters.filter( (monster) => {

    return monster.name.toLocaleLowerCase().includes( searchFeild );

  } )

  console.log("render")

  return (
   
    <div className="App">

   <SearchBox onChangeHandler={onSearchChange} placeholder='search monsters' className = 'monsters-search-box'/>


    <CardList monsters={ filteredMonsters } /> 
    </div>
  );
}


 
}

export default App;
