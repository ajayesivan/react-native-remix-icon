import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgAppsLine = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    {...props}
  >
    <Path d="M6.75 2.5A4.25 4.25 0 0 1 11 6.75V11H6.75a4.25 4.25 0 0 1 0-8.5M9 9V6.75A2.25 2.25 0 1 0 6.75 9zm-2.25 4H11v4.25A4.25 4.25 0 1 1 6.75 13m0 2A2.25 2.25 0 1 0 9 17.25V15zm10.5-12.5a4.25 4.25 0 0 1 0 8.5H13V6.75a4.25 4.25 0 0 1 4.25-4.25m0 6.5A2.25 2.25 0 1 0 15 6.75V9zM13 13h4.25A4.25 4.25 0 1 1 13 17.25zm2 2v2.25A2.25 2.25 0 1 0 17.25 15z" />
  </Svg>
);
export default SvgAppsLine;
