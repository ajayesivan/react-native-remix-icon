import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgEye2Line(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm0 2a8 8 0 100 16 8 8 0 000-16zm0 3a5 5 0 11-4.78 3.527A2.499 2.499 0 0012 9.5a2.5 2.5 0 00-1.473-2.28A5.01 5.01 0 0112 7z" />
    </Svg>
  );
}

export default SvgEye2Line;
