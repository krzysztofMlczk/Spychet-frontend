import React, { useContext } from "react";
import {
  InformationLabel,
  AstronautIcon,
  EditIcon,
  RowWrapper,
  EmailIcon,
  ScoreIcon,
} from "./ProfilePageElements";
import { HomeBtn, BtnWrapper } from "../../sharedComponents/sharedElements";
import UserContext from "../../../context/UserContext";

const ViewProfileComponent = (props) => {
  const { userData } = useContext(UserContext);

  return (
    <>
      <RowWrapper>
        <AstronautIcon />
        <InformationLabel>{userData.nickname}</InformationLabel>
        <EditIcon id="nickname" onClick={() => props.edit("nickname")} />
      </RowWrapper>
      <RowWrapper>
        <EmailIcon />
        <InformationLabel>{userData.email}</InformationLabel>
        <EditIcon id="email" onClick={(e) => props.edit("email")} />
      </RowWrapper>
      <RowWrapper>
        <ScoreIcon />
        <InformationLabel>Overall Score: {props.score}</InformationLabel>
      </RowWrapper>
      <BtnWrapper single={true}>
        <HomeBtn to="/">Home</HomeBtn>
      </BtnWrapper>
    </>
  );
};

export default ViewProfileComponent;
