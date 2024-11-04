import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgNewspaperFill = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    {...props}
  >
    <Path d="M19 22H5a3 3 0 0 1-3-3V3a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v7h4v9a3 3 0 0 1-3 3m-1-10v7a1 1 0 1 0 2 0v-7zM5 6v6h6V6zm0 7v2h10v-2zm0 3v2h10v-2zm2-8h2v2H7z" />
  </Svg>
);
export default SvgNewspaperFill;
