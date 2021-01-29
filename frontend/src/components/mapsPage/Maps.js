import Axios from "axios";
import React, { useState, useEffect } from "react";
import Background from "../sharedComponents/Background";
import MapRow from "./MapRow";
import {
  SubPageContainer,
  FormPane,
  Title,
  BtnWrapper,
  HomeBtn,
  FooterText,
} from "../sharedComponents/sharedElements";

export default function Maps() {
  const [maps, setMaps] = useState([]);

  useEffect(() => {
    const getMaps = async () => {
      const maps = await Axios.get(
        "http://127.0.0.1:5000/maps/all_maps_with_best_scores"
      );
      setMaps(maps.data);
    };
    getMaps();
  }, []);

  return (
    <>
      <SubPageContainer start={1}>
        <Title>MAPS</Title>
        <FormPane>
          {maps.map((mapObj, i) => (
            <MapRow
              key={i}
              data={mapObj}
              number={i}
              lastChild={i === maps.length - 1 ? 1 : 0}
            />
          ))}
          <BtnWrapper single={true}>
            <HomeBtn to="/">Home</HomeBtn>
          </BtnWrapper>
        </FormPane>
        <FooterText>© 2020 Stamina Game Studio Inc.</FooterText>
      </SubPageContainer>
      <Background />
    </>
  );
}
