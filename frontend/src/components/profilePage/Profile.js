import React, { useState, useEffect } from "react";
import Axios from "axios";
import Background from "../sharedComponents/Background";
import {
  SubPageContainer,
  FormPane,
  Title,
  FooterText,
  SuccessLabel,
  SuccessTick,
  SuccessWrap,
} from "../sharedComponents/sharedElements";
import EditProfile from "./profilePageComponents/EditProfileComponent";
import ViewProfile from "./profilePageComponents/ViewProfileComponent";

export default function Profile() {
  const [editMode, setEditMode] = useState(false);
  const [editedValue, setEditedValue] = useState(undefined);
  const [displaySuccess, setDisplaySuccess] = useState(false);
  const [successMsg, setSuccessMsg] = useState();
  const [score, setScore] = useState();

  const enableEditMode = (value) => {
    setEditMode(true);
    setEditedValue(value);
    // remember to diable succes message if displayed
    setDisplaySuccess(false);
  };

  const disableEditMode = () => {
    setEditMode(false);
    setEditedValue(undefined);
  };

  const displaySuccessMsg = (msg) => {
    setDisplaySuccess(true);
    setSuccessMsg(msg);
  };

  useEffect(() => {
    const checkScore = async () => {
      let token = localStorage.getItem("auth-token");

      const resscore = await Axios.get(
        "http://127.0.0.1:5000/scores/overall_score",
        {
          headers: {
            "x-auth-token": token,
          },
        }
      );
      setScore(resscore.data.overall_score);
    };
    checkScore();
  });

  return (
    <>
      <SubPageContainer>
        <Title>{editMode ? "EDIT" : "PROFILE"}</Title>
        <FormPane>
          {editMode ? (
            <EditProfile
              score={score}
              editedValue={editedValue}
              editOff={disableEditMode}
              displaySuccess={displaySuccessMsg}
            />
          ) : (
            <ViewProfile edit={enableEditMode} score={score} />
          )}
          {displaySuccess ? (
            <SuccessWrap>
              <SuccessTick />
              <SuccessLabel>{successMsg}</SuccessLabel>
            </SuccessWrap>
          ) : null}
        </FormPane>
        <FooterText>© 2020 Stamina Game Studio Inc.</FooterText>
      </SubPageContainer>
      <Background />
    </>
  );
}
