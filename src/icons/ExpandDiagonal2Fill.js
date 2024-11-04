import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgExpandDiagonal2Fill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M3 3h7.5L7.457 6.043l3.25 3.25-1.414 1.414-3.25-3.25L3 10.5V3zm18 18h-7.5l3.043-3.043-3.25-3.25 1.414-1.414 3.25 3.25L21 13.5V21z" />
    </Svg>
  );
}

export default SvgExpandDiagonal2Fill;
