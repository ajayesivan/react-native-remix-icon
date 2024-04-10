import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgSpyFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M17 13a4 4 0 010 8c-2.142 0-4-1.79-4-4h-2a4 4 0 11-.535-2h3.07A3.998 3.998 0 0117 13zM2 12v-2h2V7a4 4 0 014-4h8a4 4 0 014 4v3h2v2H2z" />
    </Svg>
  );
}

export default SvgSpyFill;
