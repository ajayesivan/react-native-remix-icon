import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgSignalWifiErrorLine(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M12 3c4.284 0 8.22 1.497 11.31 3.996l-1.257 1.556A15.936 15.936 0 0012 5a15.92 15.92 0 00-8.419 2.392L12 17.817l6-7.429v3.183L12 21 .69 6.997A17.917 17.917 0 0112 3zm10 16v2h-2v-2h2zm0-9v7h-2v-7h2z" />
    </Svg>
  );
}

export default SvgSignalWifiErrorLine;
