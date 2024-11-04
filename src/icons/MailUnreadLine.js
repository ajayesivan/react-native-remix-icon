import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgMailUnreadLine = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    {...props}
  >
    <Path d="M16.1 3a5 5 0 0 0 0 2H4.511l7.55 6.662 5.049-4.52c.426.527.958.966 1.563 1.285l-6.601 5.911L4 7.216V19h16V8.9a5 5 0 0 0 2 0V20a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zM21 1a3 3 0 1 1 0 6 3 3 0 0 1 0-6" />
  </Svg>
);
export default SvgMailUnreadLine;
