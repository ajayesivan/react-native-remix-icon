import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgVuejsLine = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    {...props}
  >
    <Path d="M3.317 3 12 18l8.684-15h2.316l-11 19-11-19zm4.342 0L12 10.5 16.343 3h2.316L12 14.5 5.343 3z" />
  </Svg>
);
export default SvgVuejsLine;
