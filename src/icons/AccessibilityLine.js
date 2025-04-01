import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgAccessibilityLine = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    {...props}
  >
    <Path d="M4 12a8 8 0 1 1 16 0 8 8 0 0 1-16 0m8-10C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2m0 6.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3m0 1c-1.557 0-3.178-.357-4.629-.929L6.63 10.43c1.076.429 2.228.718 3.37.901 0 .87.086 1.764-.316 2.567l-1.578 3.156 1.79.894 1.552-3.105a.618.618 0 0 1 1.106 0l1.552 3.105 1.79-.894-1.578-3.156C13.915 13.094 14 12.2 14 11.33a16.5 16.5 0 0 0 3.359-.897c.025-.01-.73-1.862-.733-1.86-1.453.566-3.067.927-4.626.927" />
  </Svg>
);
export default SvgAccessibilityLine;
