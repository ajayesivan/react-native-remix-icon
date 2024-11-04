import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgPassValidLine = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    {...props}
  >
    <Path d="M3 18h18V6H3zM1 5a1 1 0 0 1 1-1h20a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1zm8 5a1 1 0 1 0-2 0 1 1 0 0 0 2 0m2 0a3 3 0 1 1-6 0 3 3 0 0 1 6 0m-2.998 6c-.967 0-1.84.39-2.475 1.025l-1.414-1.414A5.49 5.49 0 0 1 8.002 14c1.518 0 2.895.617 3.889 1.61l-1.414 1.415A3.49 3.49 0 0 0 8.002 16m8.205-1.293 4-4-1.414-1.414-3.293 3.293-1.793-1.793-1.414 1.414 2.5 2.5.707.707z" />
  </Svg>
);
export default SvgPassValidLine;
