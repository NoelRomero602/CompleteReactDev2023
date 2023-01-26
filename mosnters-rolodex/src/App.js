import logo from './logo.svg';
import {useState, useEffect} from 'react';
import './App.css';
import React from 'react'
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component'

const App = () => {
  console.log('render')
  const [searchField, setSearchField] = useState(''); 
  const [monsters, setMonsters] = useState([]); 
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);

  useEffect( () => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then( (users)  => setMonsters(users)
    )
  }, [])

  useEffect ( () => {
    const newFilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    })
   setFilteredMonsters(newFilteredMonsters)

   console.log('effect is firing for filtered Monsters ')
  }, [searchField, monsters])


  const onSearchChange = (event) => {
 
         const searchFeildString= event.target.value.toLocaleLowerCase();
        
      setSearchField(searchFeildString);
    
  }

  
  return (


    <div className="App">

    <h1 className="app-title">Monsters Rolodex </h1>
    <SearchBox 
        onChangeHandler={onSearchChange}
        placeholder='search monsters' 
        className = 'monsters-search-box'/>
 
      <CardList monsters={ filteredMonsters } /> 
    </div>


  )


}

// class App  extends Component {

//   constructor(){
   
//     super();

//     this.state = {
//      monsters: [],
//      searchFeild: ''
//     };
//   }

//   componentDidMount() {
    
//     fetch('https://jsonplaceholder.typicode.com/users')
//     .then(response => response.json())
//     .then( (users)  => this.setState( () => {
//       return {monsters: users }
//     } ))
//   }

// //   onSearchChange = (event) => {
 
//     const searchFeild = event.target.value.toLocaleLowerCase();
    
//     this.setState( 
//       () => 
//       { return { searchFeild : searchFeild  } },  )

//     }

// render (){
//  const { monsters, searchFeild} = this.state 
//  const {onSearchChange} = this 

//   const filteredMonsters = monsters.filter( (monster) => {

//     return monster.name.toLocaleLowerCase().includes( searchFeild );

//   } )

//   console.log("render")

//   return (
   
//   );
// }


 
// }

export default App;
