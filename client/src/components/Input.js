import React from 'react';
import Button from './Button'
import { Form } from 'semantic-ui-react'

class InputComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            race: '',
            password: ''
        };
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    logIn = () => {
        return (
            <Form inverted>
                <h4>Please provide Username and Password to get access to our absolute BANGERS</h4>
                <Form.Field required>
                    <label htmlFor="username">Username</label>
                    <input id="username" name="username" onChange={this.handleChange} value={this.state.username} />
                </Form.Field>
                <Form.Field required>
                    <label htmlFor="password">Password</label>
                    <input type="text" id="password" name="password" onChange={this.handleChange} value={this.state.password} />
                </Form.Field>
                <Button text="Login" function={() => {
                    let user = {
                        username: this.state.username,
                        password: this.state.password
                    }
                    this.props.login(user)
                    setTimeout(() => {
                        this.props.fetch()
                    }, 300)
                }} />
            </Form>
        )
    }
    signUp = () => {
        return (
            <Form inverted>
                <Form.Field required>
                    <label htmlFor="username">Username</label>
                    <input id="username" name="username" onChange={this.handleChange} value={this.state.username} />
                </Form.Field>
                {/* <Form.Field>
                    <label htmlFor="race"><span classname='label'>Race</label>
                    <input id="race" name="race" onChange={this.handleChange} value={this.state.race} />
                </Form.Field> */}
                <Form.Field required>
                    <label htmlFor="password">Password</label>
                    <input type="text" id="password" name="password" onChange={this.handleChange} value={this.state.password} />
                </Form.Field>
                <Button text="Register" function={() => {
                    let user = {
                        username: this.state.username,
                        race: this.state.race,
                        password: this.state.password
                    }
                    this.props.register(user)
                    setTimeout(() => {
                        this.props.fetch()
                    }, 300)
                }} />
            </Form>
        );
    }
    render() {
        return (
            <div>
                {this.props.page === "signup" ? this.signUp() : this.logIn()}
            </div>
        );
    }
}


export default InputComponent;
