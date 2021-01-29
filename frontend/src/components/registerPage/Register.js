import React, { useState } from "react";
import Background from "../sharedComponents/Background";
import {
  SubPageContainer,
  Title,
  FormPane,
  InputBoxWrapper,
  InputBox,
  InputLabel,
  ErrorLabel,
  SubmitBtn,
  HomeBtn,
  BtnsWrap,
  InformationLabel,
  LoginPageBtn,
  ErrIcon,
  ToolTip,
} from "../sharedComponents/sharedElements";
import Axios from "axios";
import { sha256 } from "js-sha256";

export default function Register() {
  const [nickname, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [passwordCheck, setPasswordCheck] = useState();
  const [emailCorrect, setEmailCorrect] = useState(true);
  const [passCorrect, setPassCorrect] = useState(true);
  const [error_occ, setError_occ] = useState(false);
  const [err_msg, setErr_msg] = useState();
  const [regSuccess, setRegSuccess] = useState(false);

  const changeView = () => {
    setRegSuccess(true);
  };

  const checkAndSetEmail = (email) => {
    const emailPattern = /[a-z0-9!#$%&'+/=?^_`{|}~-]+(?:.[a-z0-9!#$%&'+/=?^_`{|}~-]+)@(?:[a-z0-9](?:[a-z0-9-][a-z0-9])?.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
    if (emailPattern.test(email)) {
      setEmailCorrect(true);
      setEmail(email);
    } else {
      setEmailCorrect(false);
    }
  };

  const checkAndSetPassword = (password) => {
    if (password.length < 5) {
      setPassCorrect(false);
    } else {
      setPassCorrect(true);
      setPassword(password);
    }
  };

  /**
   * Submit changes from input fields
   *
   * Activate on click submit button
   *
   * Validation is done
   * If everything ok with account requirement specification
   * go to server connection
   * If note, error message occurs
   * One has chance to change imput
   *
   * @param e
   */

  const submit = async (e) => {
    e.preventDefault();

    if (!email || !password || !passwordCheck || !nickname) {
      setError_occ(true);
      setErr_msg("Enter all fields");
    } else if (password.length < 5) {
      setError_occ(true);
      setErr_msg("Password has to be at least 5 characters long");
    } else if (password !== passwordCheck) {
      setError_occ(true);
      setErr_msg("Password and confirmation must be the same");
    } else {
      /**
       * Connecting with backend side
       * With REST API
       * @param {json} newUser input from register field passed to database
       *
       *
       * Axios.post return status code and message from sever
       * If status = 200
       * Registration completed
       * If status 400 - bad reguest, one has change to change data
       * If status 500 - Internal server error
       */
      try {
        const hash_password = sha256.create().update(password).hex();
        const hash_passwordCheck = sha256.create().update(passwordCheck).hex();
        const newUser = {
          email,
          password: hash_password,
          passwordCheck: hash_passwordCheck,
          nickname,
        };
        await Axios.post("http://127.0.0.1:5000/users/register", newUser);
        changeView();
      } catch (error) {
        setError_occ(true);
        if (!error.response) {
          setErr_msg("Cannot connect to the server");
        } else {
          setErr_msg(error.response.data.msg);
        }
      }
    }
  };

  return (
    <>
      <SubPageContainer>
        <Title>{regSuccess ? "Success" : "Register"}</Title>
        <FormPane>
          {regSuccess ? (
            <>
              <InformationLabel>Welcome on Board!</InformationLabel>
              <BtnsWrap>
                <LoginPageBtn to="/login">Log in</LoginPageBtn>
                <HomeBtn to="/">Home</HomeBtn>
              </BtnsWrap>
            </>
          ) : (
            <>
              <InputBoxWrapper>
                <InputBox
                  type="text"
                  required
                  onChange={(e) => setName(e.target.value)}
                />
                <InputLabel>Nickname</InputLabel>
              </InputBoxWrapper>
              <InputBoxWrapper>
                <InputBox
                  type="text"
                  required
                  onChange={(e) => checkAndSetEmail(e.target.value)}
                />
                <InputLabel>E-mail</InputLabel>
                {emailCorrect ? (
                  <ErrIcon display="none" />
                ) : (
                  <>
                    <ErrIcon />
                    <ToolTip>Invalid e-mail</ToolTip>
                  </>
                )}
              </InputBoxWrapper>
              <InputBoxWrapper>
                <InputBox
                  type="password"
                  required
                  onChange={(e) => checkAndSetPassword(e.target.value)}
                />
                <InputLabel>Password</InputLabel>
                {passCorrect ? (
                  <ErrIcon display="none" />
                ) : (
                  <>
                    <ErrIcon />
                    <ToolTip>Min. 5 characters</ToolTip>
                  </>
                )}
              </InputBoxWrapper>
              <InputBoxWrapper>
                <InputBox
                  type="password"
                  required
                  onChange={(e) => setPasswordCheck(e.target.value)}
                />
                <InputLabel>Verify Password</InputLabel>
              </InputBoxWrapper>
              {error_occ ? <ErrorLabel>{err_msg}</ErrorLabel> : null}
              <BtnsWrap>
                <SubmitBtn
                  type="submit"
                  value="SignUp"
                  onClick={submit}
                  disabled={!emailCorrect || !passCorrect}
                />
                <HomeBtn to="/">Home</HomeBtn>
              </BtnsWrap>
            </>
          )}
        </FormPane>
      </SubPageContainer>
      <Background />
    </>
  );
}
