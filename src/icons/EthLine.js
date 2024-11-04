import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgEthLine = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    {...props}
  >
    <Path d="M8.149 15.304 12 20.6l3.851-5.296L12 17.674zm8.988-3.14L12 3.816l-5.137 8.348L12 15.326zM4 13l8-13 8 13-8 11z" />
  </Svg>
);
export default SvgEthLine;
