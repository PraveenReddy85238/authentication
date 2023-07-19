// Write your JS code here
import {Component} from 'react'
import './index.css'

class LoginForm extends Component {
  state = {
    username: '',
    password: '',
    isSubmitErrorMsg: false,
    errorMessage: '',
  }

  onSubmitSuccess = () => {
    const {history} = this.props
    history.replace('/')
  }

  submitLoginButton = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = response.json()
    console.log(data)
    console.log(data.error_msg)
    if (response.ok === true) {
      this.onSubmitSuccess()
    } else {
      this.setState({isSubmitErrorMsg: true, errorMessage: data.error_msg})
    }
  }

  onChangeUsername = event => {
    this.setState({
      username: event.target.value,
    })
  }

  onChangePassword = event => {
    this.setState({
      password: event.target.value,
    })
  }

  render() {
    const {isSubmitErrorMsg, errorMessage} = this.state
    return (
      <form className="form-container" onClick={this.submitLoginButton}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
          alt="website login"
          className="login-image"
        />
        <div className="login-card-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
            alt="website logo"
            className="website-logo"
          />
          <br />
          <label htmlFor="username" className="input-label">
            USERNAME
          </label>
          <br />
          <input
            type="text"
            id="username"
            className="input"
            placeholder="Username"
            onChange={this.onChangeUsername}
          />
          <br />
          <label htmlFor="password" className="input-label">
            PASSWORD
          </label>
          <br />
          <input
            type="password"
            id="password"
            placeholder="Password"
            className="input"
            onChange={this.onChangePassword}
          />
          <br />
          <div className="submit-btn-container">
            <button type="submit" className="login-btn">
              Login
            </button>
          </div>
          {isSubmitErrorMsg && <p>*{errorMessage}</p>}
        </div>
      </form>
    )
  }
}

export default LoginForm
