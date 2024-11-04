import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgPokerHeartsFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M2 8.5a5.5 5.5 0 0110-3.163A5.5 5.5 0 0122 8.5c0 7.5-10 12.985-10 12.985S2 16 2 8.5z" />
    </Svg>
  );
}

export default SvgPokerHeartsFill;
