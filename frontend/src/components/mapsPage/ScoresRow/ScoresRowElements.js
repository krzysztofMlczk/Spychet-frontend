import styled from "styled-components";

export const SectionWrap = styled.div`
  padding: 20px 20px 0 20px;
  max-height: ${({ display }) => (display ? "250px" : "0")};
  transition: max-height 0.5s ease-in;
  overflow: hidden;
`;

export const SingleRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
`;

export const Text = styled.span`
  font-size: 16px;
`;

export const Label = styled.div`
  /* color: #40bad5; */
  color: #80d293;
  font-size: 20px;
  line-height: 16px;
  font-weight: 900;
  letter-spacing: 2px;
  text-transform: uppercase;
  margin-bottom: 16px;
`;
