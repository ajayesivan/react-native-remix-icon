import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgTableLine = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    {...props}
  >
    <Path d="M4 8h16V5H4zm10 11v-9h-4v9zm2 0h4v-9h-4zm-8 0v-9H4v9zM3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1" />
  </Svg>
);
export default SvgTableLine;
