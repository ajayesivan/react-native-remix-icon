import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgUserSmileFill = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    {...props}
  >
    <Path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10M7 12a5 5 0 0 0 10 0h-2a3 3 0 1 1-6 0z" />
  </Svg>
);
export default SvgUserSmileFill;
