import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgArchive2Fill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M22 20V7l-2-4H4L2 7.004V20a1 1 0 001 1h18a1 1 0 001-1zM5.236 5h13.528l1 2H4.237l.999-2zM9 11h6v2H9v-2z" />
    </Svg>
  );
}

export default SvgArchive2Fill;
