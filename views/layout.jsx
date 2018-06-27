var React = require('react');

class Layout extends React.Component {

  render() {
    
    return (
      <html>
        <head>
          <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css"></link>
        </head>
      	<body>
      		{this.props.children}
      	</body>
      </html>
    );
    
  }
}

module.exports = Layout;