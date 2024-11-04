import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgPokerDiamondsLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M4.036 10.733a2 2 0 000 2.533l7.19 8.788a1 1 0 001.548 0l7.19-8.788a2 2 0 000-2.533l-7.19-8.787a1 1 0 00-1.548 0l-7.19 8.787zM12 4.158L18.416 12 12 19.84 5.584 12 12 4.158z" />
    </Svg>
  );
}

export default SvgPokerDiamondsLine;
