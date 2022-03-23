import React, { Component } from 'react';
import './login.css'
export default class Login extends Component {
    constructor() {
        super();
        this.state = {
          loggedIn: false,
          email:"",
          password:""
          }
      }
      handleonChange = (event) => {
        this.setState({ email : event.target.value });
        console.log("abcd");
      }
      handleOnChange1 = (event) => {
       this.setState({ password : event.target.value });
      }
      handleClick = (event) => {
        event.preventDefault();
        if (this.state.email === "admin" && this.state.password === "admin@123") {
          this.setState({
            loading: true,
          })
          setTimeout(() => {
            this.setState({
              loggedIn: true,
            })
          }, 1000);
          window.location.href = "/Dashboard"
        } else {
          this.setState({
            enableError: true
          })
        }
      }
  render() {
    return (
        <React.Fragment>
      <div className='top'>
          <div className="topleft">
          <div className='logo'>
              <h1 >Your Logo</h1>
          </div>
          <div className="signin">
              <h1>Sign in to</h1>
          </div>
          <div className='lorem'>
              <span>Lorem Ipsum is simply</span>
          </div>
          <div className="lorem1">
              <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</span>
          </div>
          </div>
          <div className="topright">
              <div className="topimage">
                  <img className='saly' src="./saly.png" alt="..." />
              </div>
          </div>

          {/* SIGN UP */}

          <div className="signupbox">
          <div className="signup-heading">
              <div className="welcome">
           
                  <span>Welcome to <span className='LOREM'>LOREM</span></span>
           
              </div>
              <div className="noaccount">
            
                  <span className='no-account'>No Account? <a className='signup-link' href='...'>Sign up</a></span>
               
              </div>
          </div>
          <div className="signup-signin">
              <h1>Sign In</h1>
          </div>
           
        <div className="social">
         <div className="google">
            <div className="google-image">
                <img src="./google.png" alt="" />
                <span className='google-text'>Sign in with Google</span>
            </div>
         </div>
         <div className="fb">
         <div className="fb-image">
                <img src="./facebook.png" alt="" />
            </div>
         </div>
         <div className="apple">
         <div className="apple-image">
                <img src="./apple.png" alt="" />
            </div>
         </div>
         </div>
         <div className="username">
             <label>Enter your username or email address</label>
            <div className="inputusername">
                 <input onChange={this.handleonChange.bind(this)}  value={this.state.email} className='input-username' placeholder='Username or email address' type="text" />
            </div>
            </div>
         <div className="password">
             <label>Enter your Password</label>
             <div className="inputpassword">
                 <input className='input-password' onChange={this.handleOnChange1.bind(this)} value={this.state.password} placeholder='Password' type="text" />
            </div>
         </div>
         <div className="forgotpassword">
             <a href="...">Forgot Password</a>
         </div>
            <div className="signinbutton">
                <button onClick={this.handleClick}>Sign in</button>
            </div>
          </div>

      </div>
      <div className="bottom">
          <div className="loginas">
              <span>Login as</span>
          </div>
          <div className="loginprofile">
              <div className="profile-box1">
                  <div className="cancel1">
                      <img className='cancelimage1' src="./cancel.png" alt="" />
                  </div>
                    <div className="profile-image1">
                        <img className='image1' src="./profile1.png" alt="..." />
                    </div>
                    <br />
                    <div className='name1'><span>John peter</span></div>
                    <div className='activity1'><span>Active 1 days ago</span></div>
              </div>

              <div className="profile-box2">
              <div className="cancel2">
                      <img className='cancelimage2' src="./cancel.png" alt="" />
                  </div>
                    <div className="profile-image2">
                        <img className='image2' src="./profile2.png" alt="..." />
                    </div>
                    <br />
                    <div className='name2'><span>Alina shmen</span></div>
                    <div className='activity2'><span>Active 4 days ago</span></div>
              </div>
          </div>
      </div>
      </React.Fragment>
       )
  }
}
