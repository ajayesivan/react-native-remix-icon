import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgVideoChatFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M6.455 19L2 22.5V4a1 1 0 011-1h18a1 1 0 011 1v14a1 1 0 01-1 1H6.455zM14 10.25V8H7v6h7v-2.25L17 14V8l-3 2.25z" />
    </Svg>
  );
}

export default SvgVideoChatFill;
