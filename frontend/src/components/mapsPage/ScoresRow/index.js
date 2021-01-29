import React from "react";
import { SectionWrap, SingleRow, Text, Label } from "./ScoresRowElements";

const ScoresRow = ({ data, display }) => {
  return (
    <SectionWrap display={display && data.length !== 0 ? 1 : 0}>
      <SingleRow>
        <Label>PLAYER:</Label>
        <Label>SCORE:</Label>
      </SingleRow>
      {data.map((scoreData, i) => (
        <SingleRow key={i}>
          <Text>
            {i + 1}. {scoreData.player}
          </Text>
          <Text>{scoreData.score}</Text>
        </SingleRow>
      ))}
    </SectionWrap>
  );
};

export default ScoresRow;
