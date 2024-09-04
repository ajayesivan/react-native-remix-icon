import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgFontSize = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    {...props}
  >
    <Path d="M11.246 15H4.754l-2 5H.6L7 4h2l6.4 16h-2.154zm-.8-2L8 6.885 5.554 13zM21 12.535V12h2v8h-2v-.535a4 4 0 1 1 0-6.93M19 18a2 2 0 1 0 0-4 2 2 0 0 0 0 4" />
  </Svg>
);
export default SvgFontSize;
