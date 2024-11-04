import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgParkingLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M6 3h7a6 6 0 010 12H8v6H6V3zm2 2v8h5a4 4 0 000-8H8z" />
    </Svg>
  );
}

export default SvgParkingLine;
