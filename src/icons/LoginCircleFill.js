import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgLoginCircleFill = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    {...props}
  >
    <Path d="M10 11H2.048c.502-5.053 4.765-9 9.95-9 5.523 0 10 4.477 10 10s-4.477 10-10 10c-5.185 0-9.448-3.947-9.95-9h7.95v3l5-4-5-4z" />
  </Svg>
);
export default SvgLoginCircleFill;
