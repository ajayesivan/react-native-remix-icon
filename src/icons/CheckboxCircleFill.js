import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgCheckboxCircleFill = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    {...props}
  >
    <Path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10m-.997-6 7.07-7.071-1.413-1.414-5.657 5.657-2.829-2.829-1.414 1.414z" />
  </Svg>
);
export default SvgCheckboxCircleFill;
