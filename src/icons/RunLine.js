import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgRunLine = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    {...props}
  >
    <Path d="M9.83 8.79 8 9.456V13H6V8.05h.015l5.268-1.918c.244-.093.51-.14.782-.131a2.62 2.62 0 0 1 2.427 1.82q.279.875.51 1.181A5 5 0 0 0 19 11v2a6.99 6.99 0 0 1-5.402-2.547l-.697 3.956L15 16.17V23h-2v-5.898l-2.27-1.904-.727 4.127-6.894-1.215.348-1.97 4.924.868zM13.5 5.5a2 2 0 1 1 0-4 2 2 0 0 1 0 4" />
  </Svg>
);
export default SvgRunLine;
