import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgLayoutLeftLine(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M21 3a1 1 0 011 1v16a1 1 0 01-1 1H3a1 1 0 01-1-1V4a1 1 0 011-1h18zM7 5H4v14h3V5zm13 0H9v14h11V5z" />
    </Svg>
  );
}

export default SvgLayoutLeftLine;
