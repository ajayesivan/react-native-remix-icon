import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgMoonFill(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M11.38 2.019a7.5 7.5 0 1010.6 10.6C21.662 17.854 17.316 22 12.001 22 6.477 22 2 17.523 2 12c0-5.315 4.146-9.661 9.38-9.981z" />
    </Svg>
  );
}

export default SvgMoonFill;
