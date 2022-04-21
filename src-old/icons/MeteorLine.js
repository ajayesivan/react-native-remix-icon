import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgMeteorLine(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M21 1v12A9 9 0 117.375 5.278L14 1.453v2.77L21 1zm-2 3.122l-7 3.224v-2.43L8.597 6.881a6.997 6.997 0 00-3.592 5.845L5 13a7 7 0 0013.996.24L19 13V4.122zM12 8a5 5 0 110 10 5 5 0 010-10zm0 2a3 3 0 100 6 3 3 0 000-6z" />
    </Svg>
  );
}

export default SvgMeteorLine;
