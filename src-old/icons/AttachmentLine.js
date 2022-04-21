import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgAttachmentLine(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M14 13.5V8a4 4 0 10-8 0v5.5a6.5 6.5 0 1013 0V4h2v9.5a8.5 8.5 0 11-17 0V8a6 6 0 1112 0v5.5a3.5 3.5 0 01-7 0V8h2v5.5a1.5 1.5 0 003 0z" />
    </Svg>
  );
}

export default SvgAttachmentLine;
