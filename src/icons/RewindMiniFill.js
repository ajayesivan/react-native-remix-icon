import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgRewindMiniFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M11 17.035a.5.5 0 01-.788.409l-7.133-5.035a.499.499 0 010-.818l7.133-5.035a.5.5 0 01.788.409v10.07zm1.079-4.627a.499.499 0 010-.816l7.133-5.036a.5.5 0 01.788.409v10.07a.5.5 0 01-.788.409l-7.133-5.035z" />
    </Svg>
  );
}

export default SvgRewindMiniFill;
