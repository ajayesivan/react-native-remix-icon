import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgCopyrightLine(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M12 2c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2zm0 2c-4.42 0-8 3.58-8 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm0 3c1.82 0 3.413.973 4.288 2.428l-1.714 1.029A3 3 0 1012 15a2.998 2.998 0 002.573-1.456l1.715 1.028A4.999 4.999 0 017 12c0-2.76 2.24-5 5-5z" />
    </Svg>
  );
}

export default SvgCopyrightLine;
