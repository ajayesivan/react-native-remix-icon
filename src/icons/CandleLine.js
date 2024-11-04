import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgCandleLine = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    {...props}
  >
    <Path d="M9.172 9.331a4 4 0 0 1 0-5.656L12 .846l2.828 2.829A4 4 0 0 1 13 10.377V12h5a1 1 0 0 1 1 1v7h2v2H3v-2h2v-7a1 1 0 0 1 1-1h5v-1.623A4 4 0 0 1 9.172 9.33m1.414-4.242a2 2 0 1 0 2.828 0L12 3.675zM7 14v6h10v-6z" />
  </Svg>
);
export default SvgCandleLine;
