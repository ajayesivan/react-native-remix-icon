import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgRuler2Fill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M15 21h-2v-3h-2v3H9v-2H7v2H4a1 1 0 01-1-1v-3h2v-2H3v-2h3v-2H3V9h2V7H3V4a1 1 0 011-1h6a1 1 0 011 1v9h9a1 1 0 011 1v6a1 1 0 01-1 1h-3v-2h-2v2z" />
    </Svg>
  );
}

export default SvgRuler2Fill;
