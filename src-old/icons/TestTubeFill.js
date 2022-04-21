import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgTestTubeFill(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M17 2v2h-1v14c0 2.21-1.79 4-4 4s-4-1.79-4-4V4H7V2h10zm-4 13a1 1 0 100 2 1 1 0 000-2zm-2-3a1 1 0 100 2 1 1 0 000-2zm3-8h-4v4h4V4z" />
    </Svg>
  );
}

export default SvgTestTubeFill;
