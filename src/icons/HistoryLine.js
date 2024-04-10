import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgHistoryLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12h2a8 8 0 101.385-4.5H8v2H2v-6h2V6a9.985 9.985 0 018-4zm1 5v4.585l3.243 3.243-1.415 1.415L11 12.413V7h2z" />
    </Svg>
  );
}

export default SvgHistoryLine;
