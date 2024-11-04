import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgTableView = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    {...props}
  >
    <Path d="M3 3a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zm5 2v3H4V5zm-4 9v-4h4v4zm0 2h4v3H4zm6 0h10v3H10zm10-2H10v-4h10zm0-9v3H10V5z" />
  </Svg>
);
export default SvgTableView;
