import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgReplyLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M11 20L1 12l10-8v5c5.523 0 10 4.477 10 10 0 .273-.01.543-.032.81a9.002 9.002 0 00-7.655-4.805L13 15h-2v5zm-2-7h4.034l.347.007c1.285.043 2.524.31 3.676.766A7.982 7.982 0 0011 11H9V8.161L4.202 12 9 15.839V13z" />
    </Svg>
  );
}

export default SvgReplyLine;
