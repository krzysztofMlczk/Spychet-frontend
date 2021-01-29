import React, { useContext, useState, useEffect } from "react";
import {
  RowWrapper,
  AstronautIcon,
  EmailIcon,
  ScoreIcon,
  InformationLabel,
  CancelBtn,
} from "./ProfilePageElements";
import {
  InputBoxWrapper,
  InputBox,
  InputLabel,
  SubmitBtn,
  ErrorLabel,
  ErrIcon,
  ToolTip,
  BtnWrapper,
} from "../../sharedComponents/sharedElements";
import UserContext from "../../../context/UserContext";
import Axios from "axios";

const EditProfileComponent = (props) => {
  const [nickname, setNickname] = useState();
  const [email, setEmail] = useState();
  const [nicknameEdit, setNicknameEdit] = useState(false);
  const [emailEdit, setEmailEdit] = useState(false);
  const [err_occ, setError_occ] = useState(false);
  const [emailCorrect, setEmailCorrect] = useState(true);
  const [nicknameCorrect, setNicknameCorrect] = useState(true);
  const [err_msg, setErr_msg] = useState();

  const { userData, setUserData } = useContext(UserContext);

  useEffect(() => {
    if (props.editedValue === "nickname") setNicknameEdit(true);
    else if (props.editedValue === "email") setEmailEdit(true);
  }, [props.editedValue]);

  const checkAndSetEmail = (email) => {
    const emailPattern = /[a-z0-9!#$%&'+/=?^_`{|}~-]+(?:.[a-z0-9!#$%&'+/=?^_`{|}~-]+)@(?:[a-z0-9](?:[a-z0-9-][a-z0-9])?.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
    if (emailPattern.test(email)) {
      setEmailCorrect(true);
      setEmail(email);
    } else {
      setEmailCorrect(false);
    }
  };

  const checkAndSetNickname = (nickname) => {
    if (0 < nickname.length && nickname.length < 30) {
      setNicknameCorrect(true);
      setNickname(nickname);
    } else {
      setNicknameCorrect(false);
    }
  };

  const editedValueChanged = () => {
    if (emailEdit && email === userData.email) return false;
    else if (nicknameEdit && nickname === userData.nickname) return false;
    else return true;
  };

  const submit = async (e) => {
    // if no changes provided in edited fiel, then end editing and return
    if (!editedValueChanged()) {
      props.editOff();
      return;
    }
    e.preventDefault();

    if ((emailEdit && !email) || (nicknameEdit && !nickname)) {
      setError_occ(true);
      setErr_msg("Field can't be empty");
      return;
    }

    try {
      let reqBody = null;
      const options = {
        headers: { "x-auth-token": userData.token },
      };

      let url = "http://127.0.0.1:5000/users/";

      if (emailEdit) {
        reqBody = { newEmail: email };
        url += "changeEmail";
      } else if (nicknameEdit) {
        reqBody = { newName: nickname };
        url += "changeName";
      }

      const response = await Axios.put(url, reqBody, options);

      if (emailEdit) {
        setUserData({
          ...userData,
          email: response.data.email,
        });
      } else if (nicknameEdit) {
        setUserData({
          ...userData,
          nickname: response.data.nickname,
        });
      }

      props.displaySuccess(response.data.msg);
      props.editOff();
    } catch (error) {
      setError_occ(true);
      setErr_msg(error.response.data.msg);
    }
  };

  return (
    <>
      <RowWrapper>
        <AstronautIcon />
        {nicknameEdit ? (
          <>
            <InputBoxWrapper>
              <InputBox
                type="text"
                onChange={(e) => checkAndSetNickname(e.target.value)}
                required
                autoFocus
              />
              <InputLabel>Nickname</InputLabel>
              {nicknameCorrect ? (
                <ErrIcon display="none" />
              ) : (
                <>
                  <ErrIcon />
                  <ToolTip>Max: 20 characters</ToolTip>
                </>
              )}
            </InputBoxWrapper>
          </>
        ) : (
          <InformationLabel>{userData.nickname}</InformationLabel>
        )}
      </RowWrapper>
      <RowWrapper>
        <EmailIcon />
        {emailEdit ? (
          <>
            <InputBoxWrapper>
              <InputBox
                type="text"
                onChange={(e) => checkAndSetEmail(e.target.value)}
                required
                autoFocus
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
          </>
        ) : (
          <InformationLabel>{userData.email}</InformationLabel>
        )}
      </RowWrapper>
      <RowWrapper>
        <ScoreIcon />
        <InformationLabel>Overall Score: {props.score}</InformationLabel>
      </RowWrapper>
      {err_occ ? <ErrorLabel>{err_msg}</ErrorLabel> : null}
      <BtnWrapper single={false}>
        <SubmitBtn
          type="submit"
          value="Save"
          onClick={submit}
          disabled={!emailCorrect || !nicknameCorrect}
        />
        <CancelBtn onClick={props.editOff}>Cancel</CancelBtn>
      </BtnWrapper>
    </>
  );
};

export default EditProfileComponent;
