import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgSafe3Line(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M2 4a1 1 0 011-1h18a1 1 0 011 1v15a1 1 0 01-1 1h-1v2h-2v-2H6v2H4v-2H3a1 1 0 01-1-1V4zm2 14h16V5H4v13zm11.35-9.764a3.757 3.757 0 00-3.7 0l-1.332-1.332-1.414 1.414 1.333 1.333a3.757 3.757 0 000 3.698l-1.333 1.333 1.414 1.414 1.333-1.333a3.758 3.758 0 003.698 0l1.333 1.333 1.414-1.414-1.333-1.333a3.757 3.757 0 000-3.698l1.333-1.333-1.414-1.414-1.333 1.332zm-.613 2.026a1.75 1.75 0 11-2.474 2.475 1.75 1.75 0 012.474-2.475zM5 8v7h2V8H5z" />
    </Svg>
  );
}

export default SvgSafe3Line;
