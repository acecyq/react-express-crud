var React = require('react');
var Layout = require('./layout');

class SortBy extends React.Component {

  render() {

    let pokemonList = this.props.pokemon;
    let pokenames = pokemonList.map(el => el.name).sort();
    // let sortPokenames = pokenames.sort();
    let sortPokemonList = [];
    for (let i = 0; i < pokenames.length; i++) {
      for (let j = 0; j < pokemonList.length; j++) {
        if (pokenames[i] === pokemonList[j].name) {
          sortPokemonList.push(pokemonList[j]);
        }
      }
    }
    const ulContent = sortPokemonList.map(el => {
      return (
        <li>
          <p>{el.num}</p>
          <p>{el.name}</p>
        </li>
      )
    });

    return (
      <Layout>
      		<ul>{ulContent}</ul>
      </Layout>
    );
    
  }
}

module.exports = SortBy;