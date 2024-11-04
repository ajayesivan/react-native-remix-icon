import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgArchive2Line(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M22 20V7l-2-4H4L2 7.004V20a1 1 0 001 1h18a1 1 0 001-1zM4 9h16v10H4V9zm1.236-4h13.528l1 2H4.237l.999-2zM15 11H9v2h6v-2z" />
    </Svg>
  );
}

export default SvgArchive2Line;
