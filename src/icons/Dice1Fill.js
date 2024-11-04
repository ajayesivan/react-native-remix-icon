import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgDice1Fill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M5 3a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2H5zm7 11a2 2 0 110-4 2 2 0 010 4z" />
    </Svg>
  );
}

export default SvgDice1Fill;
