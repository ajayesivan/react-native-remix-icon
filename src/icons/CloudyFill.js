import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgCloudyFill = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    {...props}
  >
    <Path d="M9 20.986a8.5 8.5 0 1 1 7.715-12.983A6.5 6.5 0 0 1 17 20.981V21H9z" />
  </Svg>
);
export default SvgCloudyFill;
