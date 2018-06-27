var React = require('react');
var Layout = require('./layout');

class NewForm extends React.Component {

  render() {

    return (
      	<Layout>
      		<h1>CREATE NEW POKEMON</h1>
      		<form method="POST" action="/pokemon/">
      			<label for="id">ID :</label>
      			<input type="text" name="id"></input>
      			<label for="num">NUM :</label>
      			<input type="text" name="num"></input>
      			<label for="name">NAME :</label>
      			<input type="text" name="name"></input>
      			<label for="image">IMAGE :</label>
      			<input type="text" name="img"></input>
      			<label for="height">HEIGHT :</label>
      			<input type="text" name="height"></input>
      			<label for="weight">WEIGHT :</label>
      			<input type="text" name="weight"></input>
      			<input type="submit" value="submit"></input>
      		</form>
      		<h1>EDIT EXISTING POKEMON</h1>
      		<form method="POST" action="/pokemon/?_method=PUT">
      			<label for="id">ID :</label>
      			<input type="text" name="id"></input>
      			<label for="num">NUM :</label>
      			<input type="text" name="num"></input>
      			<label for="name">NAME :</label>
      			<input type="text" name="name"></input>
      			<label for="image">IMAGE :</label>
      			<input type="text" name="img"></input>
      			<label for="height">HEIGHT :</label>
      			<input type="text" name="height"></input>
      			<label for="weight">WEIGHT :</label>
      			<input type="text" name="weight"></input>
      			<input type="submit" value="submit"></input>
      		</form>
      		<h1>DELETE EXISTING POKEMON</h1>
      		<form method="POST" action="/pokemon/?_method=DELETE">
      			<label for="name">NAME :</label>
      			<input type="text" name="name"></input>
      			<input type="submit" value="submit"></input>
      		</form>
      	</Layout>
    );
    
  }
}

module.exports = NewForm;