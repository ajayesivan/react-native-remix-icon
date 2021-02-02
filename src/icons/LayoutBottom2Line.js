import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgLayoutBottom2Line(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M21 3a1 1 0 011 1v16a1 1 0 01-1 1H3a1 1 0 01-1-1V4a1 1 0 011-1h18zm-1 2H4v14h16V5zm-2 10v2H6v-2h12z" />
    </Svg>
  );
}

export default SvgLayoutBottom2Line;
