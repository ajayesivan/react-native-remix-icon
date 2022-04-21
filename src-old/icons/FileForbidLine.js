import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgFileForbidLine(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M11.29 20a6.96 6.96 0 00.965 2H3.993A1 1 0 013 21.008V2.992C3 2.444 3.447 2 3.999 2H16l5 5v4.674a6.95 6.95 0 00-2-.603V8h-4V4H5v16h6.29zM18 23a5 5 0 110-10 5 5 0 010 10zm-1.293-2.292a3 3 0 004.001-4.001l-4.001 4zm-1.415-1.415l4.001-4a3 3 0 00-4.001 4.001z" />
    </Svg>
  );
}

export default SvgFileForbidLine;
