import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgChatHeartLine = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    {...props}
  >
    <Path d="M6.455 19 2 22.5V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1zM4 18.385 5.763 17H20V5H4zm8.018-3.685L8.659 11.34a2.25 2.25 0 0 1 3.182-3.182l.177.177.176-.177a2.25 2.25 0 0 1 3.182 3.182z" />
  </Svg>
);
export default SvgChatHeartLine;
