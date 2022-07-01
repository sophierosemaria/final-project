import './App.css';
import React from 'react';

class StarWars extends React.Component {
  constructor () {
    super()
    this.state = {
      loadedCharacter: false,
      name: null,
      height: null,
      homeworld: null,
      image: null,
    }
  }
  getNewCharacter() {
    const randomNumber = Math.ceil(Math.random()*88)
    const url = `https://rawcdn.githack.com/akabab/starwars-api/0.2.1/api/id/${randomNumber}.json`
    fetch(url)
      .then(response => response.json())
      .then(data => {
        this.setState({
          loadedCharacter: true,
          name: data.name,
          height: data.height,
          homeworld: data.homeworld,
          image: data.image,
        })
      })
  }
  render() {

    return (
      <div className='p-4 body-width'>
        <button 
          type="button" 
          onClick={() => this.getNewCharacter()} 
          className="btn btn-dark m-4">Randomize Character
        </button>
        {
          this.state.loadedCharacter &&
            <div className='row'>
              <div className='col '>
                <img src={this.state.image} className='character-image' />
              </div>
              <div className='col '>
                <h1>{this.state.name}</h1>
                <p>{this.state.height} cm</p>
                <p>Homeworld: {this.state.homeworld}</p>
              </div>
            </div>

        }
        
      </div>
    )
  }

}


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src="https://seeklogo.com/images/S/star-wars-logo-9E8585C340-seeklogo.com.png"  alt="logo" />
        <StarWars />
      </header>
    </div>
  );
}

export default App;
