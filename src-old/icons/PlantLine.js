import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgPlantLine(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M6 2a7 7 0 016.197 3.741A6.49 6.49 0 0117.5 3H21v2.5a6.5 6.5 0 01-6.5 6.5H13v1h5v7a2 2 0 01-2 2H8a2 2 0 01-2-2v-7h5v-2H9a7 7 0 01-7-7V2h4zm10 13H8v5h8v-5zm3-10h-1.5A4.5 4.5 0 0013 9.5v.5h1.5A4.5 4.5 0 0019 5.5V5zM6 4H4a5 5 0 005 5h2a5 5 0 00-5-5z" />
    </Svg>
  );
}

export default SvgPlantLine;
