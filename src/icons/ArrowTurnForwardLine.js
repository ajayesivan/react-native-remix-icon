import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgArrowTurnForwardLine = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    {...props}
  >
    <Path d="M17 5.828V13a6 6 0 0 1-12 0V4H3v9a8 8 0 1 0 16 0V5.828l2.536 2.536L22.95 6.95 18 2l-4.95 4.95 1.415 1.414z" />
  </Svg>
);
export default SvgArrowTurnForwardLine;
