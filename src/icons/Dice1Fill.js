import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgDice1Fill = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    {...props}
  >
    <Path d="M5 3a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zm7 11a2 2 0 1 1 0-4 2 2 0 0 1 0 4" />
  </Svg>
);
export default SvgDice1Fill;
