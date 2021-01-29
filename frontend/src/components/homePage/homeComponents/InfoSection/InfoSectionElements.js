import styled from "styled-components";
import { Link as LinkS } from "react-scroll";

export const SectionContainer = styled.div`
  position: relative;
  color: #fff;
  background: ${({ lightbg }) => (lightbg ? "#5D8086" : "#232627")};
`;

export const SectionWrapper = styled.div`
  display: grid;
  z-index: 1;
  height: 100vh;
  width: 100%;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  padding: 50px 24px;
  justify-content: center;

  @media screen and (max-width: 900px) {
    height: auto;
    padding: 80px 24px;
  }
`;

export const SectionRow = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  grid-template-areas: ${({ imgStart }) =>
    imgStart ? `'col2 col1'` : `'col1 col2'`};

  @media screen and (max-width: 768px) {
    grid-template-areas: ${({ imgStart }) =>
      imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`};
  }
`;

export const Column1 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col1;
`;

export const Column2 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col2;
`;

export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 60px;
`;

export const TopLine = styled.p`
  color: ${({ lightbg }) => (lightbg ? "#80d293" : "#01bf71")};
  font-size: 20px;
  line-height: 16px;
  font-weight: 900;
  letter-spacing: 2px;
  text-transform: uppercase;
  margin-bottom: 16px;
`;

export const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: 48px;
  line-height: 1.1;
  font-weight: 700;
  color: ${({ lightbg }) => (lightbg ? "#010606" : "#fff")};

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const Subtitle = styled.p`
  max-width: 440px;
  margin-bottom: 35px;
  letter-spacing: 1.3px;
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
  color: ${({ lightbg }) => (lightbg ? "#232627" : "#fff")};
`;

export const BtnWrap = styled.div`
  display: flex;
  justify-content: flex-start;
`;

export const ImgWrap = styled.div`
  max-width: 555px;
  height: 100%;
`;

export const Img = styled.img`
  width: 100%;
  max-height: 80vh;
  margin: 0 0 10px 0;
  padding-right: 0;
`;

//solution just for now: TO DO: BTN component
export const NavBtnLink = styled(LinkS)`
  border-radius: 50px;
  background: ${({ lightbg }) => (lightbg ? "#d8ad46" : "#d8ad46")};
  white-space: nowrap;
  // padding: vertical | horizontal
  padding: 10px 22px;
  color: #010606;
  font-size: 16px;
  font-weight: 800;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2 ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
  }
`;

export const BtnDownload = styled.a`
  border-radius: 50px;
  background: ${({ lightbg }) => (lightbg ? "#d8ad46" : "#d8ad46")};
  white-space: nowrap;
  // padding: vertical | horizontal
  padding: 10px 22px;
  color: #010606;
  font-size: 16px;
  font-weight: 800;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2 ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
  }
`;
