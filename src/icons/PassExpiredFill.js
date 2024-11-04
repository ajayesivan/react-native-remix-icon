import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgPassExpiredFill = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    {...props}
  >
    <Path d="M9 10a1 1 0 1 1-2 0 1 1 0 0 1 2 0M2 4a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h20a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1zm9 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0m-5.473 7.025-1.414-1.414A5.49 5.49 0 0 1 8.003 14c1.518 0 2.894.617 3.888 1.61l-1.414 1.415A3.49 3.49 0 0 0 8.002 16c-.967 0-1.84.39-2.475 1.025M16 10.585l1.793-1.792 1.414 1.414L17.414 12l1.793 1.793-1.414 1.414L16 13.414l-1.793 1.793-1.414-1.414L14.586 12l-1.793-1.793 1.414-1.414z" />
  </Svg>
);
export default SvgPassExpiredFill;
