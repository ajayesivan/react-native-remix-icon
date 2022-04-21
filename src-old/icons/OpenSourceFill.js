import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgOpenSourceFill(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M12 2c5.523 0 10 4.477 10 10 0 4.13-2.504 7.676-6.077 9.201l-2.518-6.55a3 3 0 10-2.809.001l-2.518 6.55A10.005 10.005 0 012 12C2 6.477 6.477 2 12 2z" />
    </Svg>
  );
}

export default SvgOpenSourceFill;
