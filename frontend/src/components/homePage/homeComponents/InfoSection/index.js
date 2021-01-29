import React from "react";

import {
  SectionContainer,
  SectionWrapper,
  SectionRow,
  Column1,
  Column2,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  BtnWrap,
  ImgWrap,
  Img,
  NavBtnLink,
  BtnDownload,
} from "./InfoSectionElements";

const InfoSection = ({
  id,
  lightBg,
  topLine,
  heading,
  description,
  buttonLabel,
  btnDestination,
  imgStart,
  img,
  alt,
  download,
  url,
}) => {
  return (
    <>
      <SectionContainer lightbg={lightBg ? 1 : 0} id={id}>
        <SectionWrapper>
          <SectionRow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <TopLine lightbg={lightBg ? 1 : 0}>{topLine}</TopLine>
                <Heading lightbg={lightBg ? 1 : 0}>{heading}</Heading>
                <Subtitle lightbg={lightBg ? 1 : 0}>{description}</Subtitle>
                <BtnWrap>
                  {download ? (
                    <BtnDownload href={url}>{buttonLabel}</BtnDownload>
                  ) : (
                    <NavBtnLink
                      to={btnDestination}
                      lightbg={lightBg ? 1 : 0}
                      smooth={true}
                      duration={700}
                      exact="true"
                    >
                      {buttonLabel}
                    </NavBtnLink>
                  )}
                </BtnWrap>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img src={img} alt={alt} />
              </ImgWrap>
            </Column2>
          </SectionRow>
        </SectionWrapper>
      </SectionContainer>
    </>
  );
};

export default InfoSection;
