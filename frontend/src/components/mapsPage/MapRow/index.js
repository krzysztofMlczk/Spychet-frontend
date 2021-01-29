import React, { useState } from "react";
import {
  RowWrap,
  LeftSide,
  TextWrap,
  Name,
  Description,
  ToggleBtn,
  Img,
  SectionWrap,
} from "./MapRowElements";
import ScoresRow from "../ScoresRow";

const MapRow = ({ data, number, lastChild }) => {
  const [showPlayers, setShowPlayers] = useState(false);

  const toggle = () => {
    setShowPlayers(!showPlayers);
  };

  return (
    <SectionWrap lastChild={lastChild}>
      <RowWrap>
        <LeftSide>
          <Img src={`data:image/jpeg;base64,${data.image}`} />
          <TextWrap>
            <Name>
              {number + 1}. {data.name}
            </Name>
            <Description>{data.description}</Description>
          </TextWrap>
        </LeftSide>
        <ToggleBtn onClick={toggle} rotate={showPlayers ? 1 : 0} />
      </RowWrap>
      <ScoresRow data={data.best_scores} display={showPlayers} />
    </SectionWrap>
  );
};

export default MapRow;
