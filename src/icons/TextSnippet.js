import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgTextSnippet = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    {...props}
  >
    <Path d="M2 4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1zm2 1v14h16V5zm3 3h10v3h-2v-1h-2v4h1.5v2h-5v-2H11v-4H9v1H7z" />
  </Svg>
);
export default SvgTextSnippet;
