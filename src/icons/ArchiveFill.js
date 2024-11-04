import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgArchiveFill = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    {...props}
  >
    <Path d="M3 10h18v10.004c0 .55-.445.996-.993.996H3.993A.994.994 0 0 1 3 20.004zm6 2v2h6v-2zM2 4c0-.552.455-1 .992-1h18.016c.548 0 .992.444.992 1v4H2z" />
  </Svg>
);
export default SvgArchiveFill;
