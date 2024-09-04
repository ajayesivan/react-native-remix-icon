import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgBugFill = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    {...props}
  >
    <Path d="M6.056 8.3a7 7 0 0 1 .199-.3h11.49q.103.148.199.3l2.02-1.166 1 1.732-2.213 1.278c.162.59.249 1.213.249 1.856v1h3v2h-3c0 .953-.19 1.862-.536 2.69l2.5 1.444-1 1.732-2.526-1.458A7 7 0 0 1 13 21.929V14h-2v7.93a7 7 0 0 1-4.438-2.522l-2.526 1.458-1-1.732 2.5-1.443A7 7 0 0 1 5 15H2v-2h3v-1c0-.643.087-1.265.249-1.856L3.036 8.866l1-1.732zM8 6a4 4 0 1 1 8 0z" />
  </Svg>
);
export default SvgBugFill;
