import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgQuoteText = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    {...props}
  >
    <Path d="M21 4H3v2h18zm0 7H8v2h13zm0 7H8v2h13zM5 11H3v9h2z" />
  </Svg>
);
export default SvgQuoteText;
