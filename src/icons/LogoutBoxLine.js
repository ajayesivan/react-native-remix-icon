import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgLogoutBoxLine = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    {...props}
  >
    <Path d="M4 18h2v2h12V4H6v2H4V3a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1zm2-7h7v2H6v3l-5-4 5-4z" />
  </Svg>
);
export default SvgLogoutBoxLine;
