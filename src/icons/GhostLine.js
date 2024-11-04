import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgGhostLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M12 2a9 9 0 019 9v7.5a3.5 3.5 0 01-6.39 1.976 2.999 2.999 0 01-5.223 0 3.5 3.5 0 01-6.382-1.783L3 18.499V11a9 9 0 019-9zm0 2a7 7 0 00-6.996 6.76L5 11v7.446l.002.138a1.5 1.5 0 002.645.88l.088-.116a2 2 0 013.393.142.999.999 0 001.74.003 2 2 0 013.296-.278l.097.13a1.5 1.5 0 002.732-.701L19 18.5V11a7 7 0 00-7-7zm0 8c1.105 0 2 1.12 2 2.5s-.895 2.5-2 2.5-2-1.12-2-2.5.895-2.5 2-2.5zM9.5 8a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm5 0a1.5 1.5 0 110 3 1.5 1.5 0 010-3z" />
    </Svg>
  );
}

export default SvgGhostLine;
