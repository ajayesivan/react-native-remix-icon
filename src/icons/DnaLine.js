import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgDnaLine = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    {...props}
  >
    <Path d="M18 1c0 .716-.064 1.38-.184 2H8.232c.182.727.468 1.383.849 2h8.1C16.132 7.317 14.187 8.994 12 10.727 8.73 8.135 6 5.668 6 1H4c0 5.466 3.21 8.464 6.386 11C7.21 14.537 4 17.534 4 23h2c0-4.96 3.08-7.434 6.618-10.214l.092-.072C16.149 10.012 20 6.987 20 1zm-.184 20H8.232a7 7 0 0 1 .849-2h8.1c-.787-1.738-2.078-3.116-3.598-4.428.533-.42 1.07-.837 1.598-1.263C17.766 15.599 20 18.44 20 23h-2q-.002-1.071-.184-2" />
  </Svg>
);
export default SvgDnaLine;
