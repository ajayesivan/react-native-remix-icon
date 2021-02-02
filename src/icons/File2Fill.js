import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgFile2Fill(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M3 9h6a1 1 0 001-1V2h10.002c.551 0 .998.455.998.992v18.016a.993.993 0 01-.993.992H3.993A1 1 0 013 20.993V9zm0-2l5-4.997V7H3z" />
    </Svg>
  );
}

export default SvgFile2Fill;
