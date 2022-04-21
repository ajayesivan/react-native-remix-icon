import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgCloudLine(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M17 21H7A6 6 0 015.008 9.339a7 7 0 1113.984 0A6 6 0 0117 21zm0-12a5 5 0 10-9.994.243l.07 1.488-1.404.494A4.002 4.002 0 007 19h10a4 4 0 10-3.796-5.265l-1.898-.633A6.003 6.003 0 0117 9z" />
    </Svg>
  );
}

export default SvgCloudLine;
