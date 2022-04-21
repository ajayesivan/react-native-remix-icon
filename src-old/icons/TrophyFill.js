import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgTrophyFill(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M13 16.938V19h5v2H6v-2h5v-2.062A8.001 8.001 0 014 9V3h16v6a8.001 8.001 0 01-7 7.938zM1 5h2v4H1V5zm20 0h2v4h-2V5z" />
    </Svg>
  );
}

export default SvgTrophyFill;
