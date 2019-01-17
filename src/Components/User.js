import React from 'react';

class User extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div>
        <h1>The User Page</h1>
        <p>Username: {"Gleb"}</p>
      </div>
    )
  }
}

  export default User;
