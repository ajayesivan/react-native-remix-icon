import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgLoginBoxLine = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    {...props}
  >
    <Path d="M4 15h2v5h12V4H6v5H4V3a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1zm6-4V8l5 4-5 4v-3H2v-2z" />
  </Svg>
);
export default SvgLoginBoxLine;
