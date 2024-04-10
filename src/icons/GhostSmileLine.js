import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgGhostSmileLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M12 2a9 9 0 019 9v7.5a3.5 3.5 0 01-6.39 1.976 2.999 2.999 0 01-5.223 0 3.5 3.5 0 01-6.382-1.783L3 18.499V11a9 9 0 019-9zm0 2a7 7 0 00-6.996 6.76L5 11v7.446l.002.138a1.5 1.5 0 002.645.88l.088-.116a2 2 0 013.393.142.999.999 0 001.74.003 2 2 0 013.296-.278l.097.13a1.5 1.5 0 002.732-.701L19 18.5V11a7 7 0 00-7-7zm4 9a4 4 0 01-7.995.2L8 13h2a2 2 0 104 0h2zm-4-6a2 2 0 110 4 2 2 0 010-4z" />
    </Svg>
  );
}

export default SvgGhostSmileLine;
