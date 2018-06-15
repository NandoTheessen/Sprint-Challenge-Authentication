import React, { Component } from 'react';
import { Route, Link, withRouter } from 'react-router-dom'
import InputComponent from './components/Input'
import axios from 'axios'
import { UserList } from './components/UsersList';
import FirstView from './components/FirstView';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      loggedin: false
    };
  }
  register = (user) => {
    // console.log(this.props)
    axios.post('http://localhost:5000/api/users', user)
      .then(response => {
        this.setState({ loggedin: true })
        alert('thanks for registering, please login!')
      })
      .catch(err => console.log(err.message))
    this.props.history.push('/login')
  }
  login = (user) => {
    axios.post('http://localhost:5000/api/login', user)
      .then(response => {
        localStorage.setItem('token', response.data.token)
        this.setState({ loggedin: true })
      })
      .catch(err => {
        console.log(err)
        this.props.history.push('/login')
        alert("Please provide correct credentials", err.message)

      })
    this.props.history.push('/jokes')
  }
  logOut = () => {
    localStorage.clear()
    this.setState({ users: [], loggedin: false })
    this.props.history.push('/')
  }
  fetchUsers = () => {
    axios.get('http://localhost:5000/api/jokes', { headers: { "authorization": localStorage.getItem('token') } })
      .then(res => {
        this.setState({ users: res.data })
      })
      .catch(err => console.log(err.message))
  }
  render() {
    return (
      <div className="App">
        {this.state.loggedin && <Link to='/'><button id='logout' type="button" onClick={this.logOut}>LogOut</button></Link>}
        <Route exact path="/" component={FirstView} />
        <Route exact path="/signup" render={props => <InputComponent {...props} page="signup" register={this.register} fetch={this.fetchUsers} />} />
        <Route exact path="/login" render={props => <InputComponent {...props} login={this.login} fetch={this.fetchUsers} />} />
        <Route exact path="/jokes" render={props => <UserList {...props} users={this.state.users} loggedin={this.state.loggedin} />} />
        {/* <Route exact path="/users" render={(props) => (
          this.state.loggedIn ? (
            <UserList {...props} users={this.state.users} />
          ) : (
              <Redirect to={{ pathname: "/login", state: 'please sign in!' }} />
            )
        )} /> */}
      </div>
    );
  }
}

export default withRouter(App)
