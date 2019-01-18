import React from 'react';
import Main from './../Components/Main';
import User from './../Components/User';
import {connect} from 'react-redux';
import {setName} from './../Actions/userActions';


class App extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div>
        <Main setName={()=>this.props.setName("Vovan")} />
        <User name={this.props.user.name} />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.userReducer,
    math: state.mathReducer
  }
}

const mapDispatchToProps = (dispatch) => {
return {
  setName: (name) => {  
    dispatch(setName(name))
  }
}
}


export default connect(mapStateToProps, mapDispatchToProps)(App);
