import React, { Component } from 'react';


import './style.css';

export default class App extends Component {
  render() {
    return (
      <div>

        <div class="container">
          <div class="row">
          <div class="col-sm-12 col-md-12">
            <div className="Banner">
              <h2>Do you want a good education and get the bang for your buck at the school you want to attend?</h2>
              <h3>You are at the right place!</h3>
            </div>
          </div>
          </div>

          <div class="row">
          <div class="col-sm-12 col-md-12">
            <div class="info"><p>So what is going on and what are we doing to help fix the problem?</p>
          </div>
            <hr/>
          </div>

          <div class="Problem-Solution">
          <div class="row">
          <div class="col-sm-12 col-md-4"><div class="PS"><h4 class="prob-align">The Problem</h4>
            <p class="align">School is expensive, there are cases of schools being partially or fully discredited. Not knowing where the good schools to attend are vital, time saving, and money saving, and best of all, you can be sure you are attending a good school.</p>
          </div></div>
          <div class="col-sm-12 col-md-4"><div class="PS"><h4 class="prob-align">The Solution</h4>
            <p class="align">Create a crowd-sourced database giving information about the schools, with all information being verified by administrators. The info is fast, it will be accurate, and you get an opinion of the school from various students</p>
          </div></div>
          <div class="col-sm-12 col-md-4"><div class="PS"><h4 class="prob-align">How Do You Fit In?</h4>
            <p class="align">Sign up today! Be part of the solution to help others. If you wish to sign up for a new account, the form is just below.</p>
          </div></div>
          </div>
          </div>

          <div class="row">
              <div class="col-sm-12 col-md-4"></div>

          <div class="col-sm-12 col-md-4">
          <div class="form-group"><div class="form-align"><div class="addUser" />
            <label for="user_email">Please enter your email:</label>
            <input type="text" class="form-control" id="email" />
          </div></div></div>
          <div class="form-group"><div class="form-align"><div class="password" />
            <label for="user_password">Please type a password:</label>
            <input type="text" class="form-control" id="password1" />
          </div></div></div>
          <div class="form-group"><div class="form-align"><div class="checkpassword" />
            <label for="verify_password">Please re-type your password:</label>
            <input type="text" class="form-control" id="password2" />
          </div></div></div>
          <div class="form-group">
            <label for="btn">Please click to add your account</label>
            <button class="btn btn-default" type="button" class="form-control">Submit</button>
          </div>

          <div class="col-sm-12 col-md-4"></div>
          </div>
        </div>
      );
    }
  }
