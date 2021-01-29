import styled from "styled-components";
import { FaUserAstronaut } from "react-icons/fa";
import { FiEdit } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";
import { FaRegChartBar } from "react-icons/fa";

export const InformationLabel = styled.label`
  color: white;
  font-size: 22px;
  width: 350px;
`;

export const RowWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: start;
  margin-bottom: 30px;
`;

export const CancelBtn = styled.div`
  border-radius: 50px;
  background: #f26a8d;
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

// ICONS

export const AstronautIcon = styled(FaUserAstronaut)`
  color: white;
  font-size: 22px;
  margin-right: 20px;
`;

export const EditIcon = styled(FiEdit)`
  color: white;
  font-size: 22px;
  justify-self: end;

  &:hover {
    scale: 1.1;
    cursor: pointer;
    color: #01bf71;
  }
`;

export const EmailIcon = styled(HiOutlineMail)`
  color: white;
  font-size: 25px;
  margin-right: 20px;
`;

export const ScoreIcon = styled(FaRegChartBar)`
  //color: white;
  color: #fff;
  font-size: 25px;
  margin-right: 20px;
`;
