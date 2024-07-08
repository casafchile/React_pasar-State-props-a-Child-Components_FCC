class MyApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {                        //define el state
      name: 'CamperBot'
    }
  }
  render() {
    return (
       <div>
         {/* Change code below this line */}
         <Navbar name={this.state.name}/>                {/* se llama al prop State llamandolo al "Navbar" (clase2) */}
         {/* Change code above this line */}
       </div>
    );
  }
};

class Navbar extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
    <div>
      {/* Change code below this line */}
      <h1>Hello, my name is: {this.props.name}</h1>     {/* hereda el state de la clase anterior */}
      {/* Change code above this line */}
    </div>
    );
  }
};
