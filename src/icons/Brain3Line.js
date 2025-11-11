import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgBrain3Line = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    {...props}
  >
    <Path d="M19.5 4.783v2.888L22 9.114v5.773l-2.501 1.444.001 2.887-5 2.887L12 20.66l-2.5 1.444-5-2.887V16.33L2 14.888l.001-5.775L4.5 7.67V4.784l5-2.887 2.499 1.444 2.502-1.445zm-6.5.29V8h-2V5.073l-1.5-.866-3.001 1.731v2.887L4 10.268v3.465l2.5 1.444v2.887l3 1.732 1.5-.867V16h2l.001 2.93 1.499.866 3-1.733v-2.886l2.5-1.445V10.27l-2.501-1.445.001-2.887-2.999-1.732z" />
  </Svg>
);
export default SvgBrain3Line;
