import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { FaTimes } from "react-icons/fa";
import { TiTick } from "react-icons/ti";

//  will center forms on subpages
export const SubPageContainer = styled.div`
  z-index: 10;
  // take out of the document flow
  position: absolute;
  top: 0;
  left: 0;
  // take as much space as possible
  width: 100%;
  height: 100%;
  // make it a flex container
  display: flex;
  flex-direction: column;
  // center items horizontally
  justify-content: ${({ start }) => (start ? "start" : "center")};
  //center items vercitally
  align-items: center;
`;

export const Title = styled.h1`
  color: white;
  font-size: 50px;
`;

export const FormPane = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  color: white;
  background: rgba(0, 0, 0, 0.5);
  padding: 40px;
  margin-top: 20px;
  box-shadow: 0 15px 25px rgba(0, 0, 0, 0.5);
  border-radius: 10px;
  overflow-wrap: break-word;
`;

export const FooterText = styled.p`
  color: #8f9296;
  font-size: 12px;
  margin-top: 20px;
`;

// INPUTS

export const InputBoxWrapper = styled.div`
  position: relative;
`;

export const InputBox = styled.input`
  width: 100%;
  color: white;
  padding: 10px 0;
  font-size: 16px;
  margin-bottom: 30px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.5);
  outline: none;
  background: transparent;
`;

export const InputLabel = styled.label`
  position: absolute;
  left: 0;
  top: 0;
  color: white;
  padding: 10px 0;
  font-size: 16px;
  // element will never be target of a pointer event
  // just to make sure that when we hover over input we get I instead of arrow
  pointer-events: none;
  transition: 0.5s;

  ${InputBox}:focus ~ &,
  ${InputBox}:valid ~ & {
    top: -25px;
    color: #01bf71;
    font-size: 14px;
  }
`;

export const BtnWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: ${(props) => (props.single ? "center" : "space-evenly")};
  margin-top: 20px;
`;

export const SubmitBtn = styled.input`
  border-radius: 50px;
  background: #01bf71;
  white-space: nowrap;
  // padding: vertical | horizontal
  padding: 10px 22px;
  color: #010606;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2 ease-in-out;
  text-decoration: none;
  font-weight: 900;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
  }
`;

// STATIC ELEMENTS

export const ErrorLabel = styled.p`
  color: #e9512f;
  font-size: 20px;
  margin-bottom: 20px;
  max-width: 250px;
  overflow-wrap: break-word;
`;

export const SuccessLabel = styled.p`
  color: #01bf71;
  font-size: 20px;
  max-width: 250px;
  overflow-wrap: break-word;
`;

export const SuccessTick = styled(TiTick)`
  color: #01bf71;
  font-size: 20px;
  margin-right: 10px;
`;

export const SuccessWrap = styled.div`
  display: flex;
  margin-top: 20px;
  justify-content: start;
`;

export const InformationLabel = styled.label`
  color: white;
  font-size: 25px;
  margin-bottom: 30px;
`;

// BUTTONS

export const BtnsWrap = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-evenly;
  align-items: center;
`;

export const HomeBtn = styled(LinkR)`
  border-radius: 50px;
  background: #40bad5;
  white-space: nowrap;
  // padding: vertical | horizontal
  padding: 10px 22px;
  color: #010606;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2 ease-in-out;
  text-decoration: none;
  font-weight: 900;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
  }
`;

export const LoginPageBtn = styled(LinkR)`
  border-radius: 50px;
  background: #01bf71;
  white-space: nowrap;
  // padding: vertical | horizontal
  padding: 10px 22px;
  color: #010606;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2 ease-in-out;
  text-decoration: none;
  font-weight: 900;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
  }
`;

export const ToolTip = styled.div`
  position: absolute;
  top: -15px;
  right: 0;
  opacity: 0;
  color: #e9512f;
  font-size: 14px;
  background-color: transparent;
`;

export const ErrIcon = styled(FaTimes)`
  color: #e9512f;
  position: absolute;
  right: -20px;
  top: 15px;

  &:hover {
    cursor: pointer;
  }

  &:hover ~ ${ToolTip} {
    opacity: 1;
  }
`;
