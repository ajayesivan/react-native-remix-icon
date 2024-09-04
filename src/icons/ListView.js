import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgListView = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    {...props}
  >
    <Path d="M2 4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1zm2 1v14h16V5zm2 2h2v2H6zm2 4H6v2h2zm-2 4h2v2H6zm12-8h-8v2h8zm-8 8h8v2h-8zm8-4h-8v2h8z" />
  </Svg>
);
export default SvgListView;
