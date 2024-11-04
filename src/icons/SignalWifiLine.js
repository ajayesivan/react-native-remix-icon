import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgSignalWifiLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M12 3c4.285 0 8.22 1.497 11.31 3.996L12 21 .69 6.997A17.925 17.925 0 0112 3zm0 2c-3.027 0-5.922.842-8.42 2.392L12 17.817 20.42 7.39A15.922 15.922 0 0012 5z" />
    </Svg>
  );
}

export default SvgSignalWifiLine;
