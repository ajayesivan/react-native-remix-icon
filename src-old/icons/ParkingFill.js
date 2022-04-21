import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgParkingFill(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M6 3h7a6 6 0 110 12h-3v6H6V3zm4 4v4h3a2 2 0 100-4h-3z" />
    </Svg>
  );
}

export default SvgParkingFill;
