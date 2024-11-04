import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgPokerDiamondsFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M4.036 10.734l7.19-8.788a1 1 0 011.548 0l7.19 8.788a2 2 0 010 2.533l-7.19 8.787a1 1 0 01-1.548 0l-7.19-8.787a2 2 0 010-2.533z" />
    </Svg>
  );
}

export default SvgPokerDiamondsFill;
