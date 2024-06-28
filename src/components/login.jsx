// eslint-disable-next-line no-unused-vars
import React from "react";
import InputBox from "./inputBox";
import Button from "./button";
import img1 from "../assets/LoginImagesBackground.jpg";
import googleImg from "../assets/google.svg";
import appleImg from "../assets/apple.svg";
import Head from "./Head"
function login() {
  return (
    <>
    {/*<div className="loginPageBox">*/}
      <div className="imgBox">
        <img src={img1} alt="helo" />
      </div>
      <div className="entryFieldBox">
        <Head/>
        <form action="/loginPage" method="post">
          <InputBox title="Email" type="email" phText="Enter your email"/>
          <InputBox title="Password" type="text" phText="Enter your password"/>
          <Button text="Login" />
        </form>
        <div className="or">-or-</div>
        <div className="bottom-Side-logo-login">
          <div><img src={googleImg} alt="" />Login with Google</div>
          <div><img src={appleImg} alt="" />Login with Apple</div>
        </div>
      </div>
    {/*</div>*/}
    </>
  )
}

export default login
