import React, { Component } from 'react';
import './App.css';
import { Container } from 'reactstrap';
import { connect } from 'react-redux';
import { getSmurfs } from '../actions';
import SmurfList from './SmurfList';
import "bootstrap/dist/css/bootstrap.min.css";
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.getSmurfs();
  }

  render() {
    return (
      <Container>
        <SmurfList />
      </Container>
    );
  }
}

const stateToProps = state => ({
  fetchingSmurfs: state.fetchingSmurfs,
})

export default connect(stateToProps, {getSmurfs})(App);
