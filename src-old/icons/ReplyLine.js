import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgReplyLine(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M11 20L1 12l10-8v5c5.523 0 10 4.477 10 10 0 .273-.01.543-.032.81a9.003 9.003 0 00-7.655-4.805L13 15h-2v5zm-2-7h4.034l.347.007c1.285.043 2.524.31 3.676.766A7.984 7.984 0 0011 11H9V8.161L4.202 12 9 15.839V13z" />
    </Svg>
  );
}

export default SvgReplyLine;
