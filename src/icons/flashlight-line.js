import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgFlashlightLine = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    {...props}
  >
    <Path d="M13 9h8L11 24v-9H4l9-15zm-2 2V7.22L7.532 13H13v4.394L17.263 11z" />
  </Svg>
);
export default SvgFlashlightLine;
