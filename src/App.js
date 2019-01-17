import React from 'react';
import Main from './Components/Main';
import User from './Components/User';


class App extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div>
        <Main/>
        <User/>
      </div>
    )
  }
}

export default App;
