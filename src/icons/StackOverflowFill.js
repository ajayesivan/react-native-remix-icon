import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgStackOverflowFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M18.001 20.003v-5.334h2v7.334h-16v-7.334h2v5.334h12zM7.6 14.736l.313-1.98 8.837 1.7-.113 1.586L7.6 14.736zm1.2-4.532l.732-1.6 7.998 3.733-.733 1.6-7.998-3.733zm2.265-3.932l1.133-1.333 6.798 5.665-1.133 1.333-6.798-5.665zm4.332-4.132l5.265 7.064-1.4 1.067-5.264-7.065 1.4-1.066zM7.333 18.668v-2h9.33v2h-9.33z" />
    </Svg>
  );
}

export default SvgStackOverflowFill;
