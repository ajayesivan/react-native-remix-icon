import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgCloudLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M12 2a7 7 0 016.992 7.339A6 6 0 0117 21H7A6 6 0 015.008 9.339 7 7 0 0112 2zm0 2a5 5 0 00-4.994 5.243l.07 1.488-1.404.494A4.002 4.002 0 007 19h10a4 4 0 10-3.796-5.265l-1.898-.633A6.003 6.003 0 0117 9a5 5 0 00-5-5z" />
    </Svg>
  );
}

export default SvgCloudLine;
