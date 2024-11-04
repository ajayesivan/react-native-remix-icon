import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgRewindStartLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M2 4a1 1 0 00-1 1v14a1 1 0 102 0v-5.667l9.223 6.149a.5.5 0 00.777-.416v-5.733l9.223 6.149a.5.5 0 00.777-.416V4.934a.5.5 0 00-.777-.416L13 10.666V4.934a.5.5 0 00-.777-.416L3 10.667V5a1 1 0 00-1-1zm9 3.737v8.526L4.606 12 11 7.737zm10 0v8.526L14.606 12 21 7.737z" />
    </Svg>
  );
}

export default SvgRewindStartLine;
