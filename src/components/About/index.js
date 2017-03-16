import React, { Component } from 'react';
import classnames from 'classnames';
import Bootstrap from 'bootstrap';

import './style.css';

function About(props) {
  return (
    <div className="User"> {props.user}
      <div className="UserLogin"> {props.user.userlogin}
        <div classname="AutoLogin"> {props.user.userlogin.autologin}
        <div classname="regLogin"> {props.user.userlogin.reglogin}
  );
}

export default class About extends Component {
  //static propTypes = {super};
  //defaultProps = (props)
  //state = {verifyUserLogin: true};

  render() {
    const { className, ...props } = this.props;
    return (
      <div className={classnames('About', className)} {...props}>
        <h1>
          About
        </h1>
      </div>
    );
  }
}
