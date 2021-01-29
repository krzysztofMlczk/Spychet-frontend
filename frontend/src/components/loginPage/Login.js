import React, { useContext, useState } from "react";
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
} from "../sharedComponents/sharedElements";

import Axios from "axios";
import { useHistory } from "react-router-dom";

import UserContext from "../../context/UserContext";
import { sha256 } from "js-sha256";

export default function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const [error_occ, setError_occ] = useState(false);
  const [err_msg, setErr_msg] = useState();

  const { setUserData } = useContext(UserContext);
  const history = useHistory();

  const submit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError_occ(true);
      setErr_msg("Enter all fields");
      return 0;
    }

    try {
      const hash_password = sha256.create().update(password).hex();
      const user = {
        email,
        password: hash_password,
      };

      const auth_user = await Axios.post(
        "http://127.0.0.1:5000/users/login",
        user
      );
      setUserData({
        token: auth_user.data.token,
        email: email,
        nickname: auth_user.data.nickname,
      });

      localStorage.setItem("auth-token", auth_user.data.token);

      history.push("/");
    } catch (error) {
      setError_occ(true);
      if (!error.response) {
        setErr_msg("Cannot connect to the server");
      } else {
        setErr_msg(error.response.data.msg);
      }
    }
  };

  return (
    <>
      <SubPageContainer>
        <Title>LOGIN</Title>
        <FormPane>
          <InputBoxWrapper>
            <InputBox
              type="text"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <InputLabel>E-mail</InputLabel>
          </InputBoxWrapper>
          <InputBoxWrapper>
            <InputBox
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <InputLabel>Password</InputLabel>
          </InputBoxWrapper>
          {error_occ ? <ErrorLabel>{err_msg}</ErrorLabel> : null}
          <BtnsWrap>
            <SubmitBtn type="submit" value="Log In" onClick={submit} />
            <HomeBtn to="/">Home</HomeBtn>
          </BtnsWrap>
        </FormPane>
      </SubPageContainer>
      <Background />
    </>
  );
}
