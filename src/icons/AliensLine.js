import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgAliensLine = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    {...props}
  >
    <Path d="M12 2a8.5 8.5 0 0 1 8.5 8.5c0 6.5-5.5 12-8.5 12s-8.5-5.5-8.5-12A8.5 8.5 0 0 1 12 2m0 2a6.5 6.5 0 0 0-6.5 6.5c0 4.794 4.165 10 6.5 10s6.5-5.206 6.5-10A6.5 6.5 0 0 0 12 4m5.5 7q.24 0 .475.025.025.235.025.475a4.5 4.5 0 0 1-4.975 4.475A4.5 4.5 0 0 1 17.5 11m-11 0a4.5 4.5 0 0 1 4.475 4.975 4.5 4.5 0 0 1-4.95-4.95Q6.259 11 6.5 11" />
  </Svg>
);
export default SvgAliensLine;
