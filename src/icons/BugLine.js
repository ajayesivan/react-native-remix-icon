import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgBugLine = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    {...props}
  >
    <Path d="M13 19.9a5 5 0 0 0 4-4.9v-3c0-.701-.144-1.378-.415-2h-9.17A5 5 0 0 0 7 12v3a5 5 0 0 0 4 4.9V14h2zm-7.464-2.21A7 7 0 0 1 5 15H2v-2h3v-1c0-.643.087-1.265.249-1.856L3.036 8.866l1-1.732L6.056 8.3a7 7 0 0 1 .199-.3h11.49q.103.148.199.3l2.02-1.166 1 1.732-2.213 1.278c.162.59.249 1.213.249 1.856v1h3v2h-3c0 .953-.19 1.862-.536 2.69l2.5 1.444-1 1.732-2.526-1.458A6.99 6.99 0 0 1 12 22a6.99 6.99 0 0 1-5.438-2.592l-2.526 1.458-1-1.732zM8 6a4 4 0 1 1 8 0z" />
  </Svg>
);
export default SvgBugLine;
