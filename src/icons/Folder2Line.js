import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgFolder2Line = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    {...props}
  >
    <Path d="M12.414 5H21a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h7.414zM20 11H4v8h16zm0-2V7h-8.414l-2-2H4v4z" />
  </Svg>
);
export default SvgFolder2Line;
