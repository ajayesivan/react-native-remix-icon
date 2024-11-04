import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgMailLine = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    {...props}
  >
    <Path d="M3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1m17 4.238-7.928 7.1L4 7.216V19h16zM4.511 5l7.55 6.662L19.502 5z" />
  </Svg>
);
export default SvgMailLine;
