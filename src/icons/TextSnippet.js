import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgTextSnippet(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M2 4a1 1 0 011-1h18a1 1 0 011 1v16a1 1 0 01-1 1H3a1 1 0 01-1-1V4zm2 1v14h16V5H4zm3 3h10v3h-2v-1h-2v4h1.5v2h-5v-2H11v-4H9v1H7V8z" />
    </Svg>
  );
}

export default SvgTextSnippet;
