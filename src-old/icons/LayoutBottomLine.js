import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgLayoutBottomLine(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M21 3a1 1 0 011 1v16a1 1 0 01-1 1H3a1 1 0 01-1-1V4a1 1 0 011-1h18zM4 16v3h16v-3H4zm0-2h16V5H4v9z" />
    </Svg>
  );
}

export default SvgLayoutBottomLine;
