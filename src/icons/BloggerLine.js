import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgBloggerLine = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    {...props}
  >
    <Path d="M3 9.009a6.01 6.01 0 0 1 6.01-6.01H12a6.01 6.01 0 0 1 6.01 5.982h.943c1.15 0 2.047.896 2.047 2.047v3.962A6.01 6.01 0 0 1 14.99 21H9.01A6.01 6.01 0 0 1 3 14.99zm6.01-4.01A4.01 4.01 0 0 0 5 9.01v5.981A4.01 4.01 0 0 0 9.01 19h5.98A4.01 4.01 0 0 0 19 14.99V11h-1c-1.076 0-2-.924-2-2 0-2.214-1.786-4-4-4zM8 9a1 1 0 0 1 1-1h3.5a1 1 0 1 1 0 2H9a1 1 0 0 1-1-1m1 5a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2z" />
  </Svg>
);
export default SvgBloggerLine;
