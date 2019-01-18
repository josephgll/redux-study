import React from 'react';


class Main extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div>
        <h1>The Main Page</h1>
        <button onClick={this.props.setName}>Change Username</button>
      </div>
    )
  }
}



export default Main;
