import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgLayoutRightLine(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M21 3a1 1 0 011 1v16a1 1 0 01-1 1H3a1 1 0 01-1-1V4a1 1 0 011-1h18zm-6 2H4v14h11V5zm5 0h-3v14h3V5z" />
    </Svg>
  );
}

export default SvgLayoutRightLine;
