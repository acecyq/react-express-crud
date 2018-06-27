var React = require('react');
var Layout = require('./layout');

class Home extends React.Component {

  render() {
    
    return (
      <Layout>
      	<h1>SORT BY NAME</h1>
      	<form method="GET" action="/">
      		<input type="hidden" name="sortby" defaultValue="name"></input>
      		<input type="submit" value="Sort By Name" id="sort"></input>
      	</form>
	</Layout>
    );
    
  }
}

module.exports = Home;