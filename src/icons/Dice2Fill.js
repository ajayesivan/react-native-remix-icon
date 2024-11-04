import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgDice2Fill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M5 3a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2H5zm5.5 6a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm6 6a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
    </Svg>
  );
}

export default SvgDice2Fill;
