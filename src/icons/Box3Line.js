import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgBox3Line = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    {...props}
  >
    <Path d="m12 1 9.5 5.5v11L12 23l-9.5-5.5v-11zM5.494 7.078 12 10.844l6.506-3.766L12 3.31zM4.5 8.813v7.534L11 20.11v-7.533zM13 20.11l6.5-3.763V8.813L13 12.576z" />
  </Svg>
);
export default SvgBox3Line;
