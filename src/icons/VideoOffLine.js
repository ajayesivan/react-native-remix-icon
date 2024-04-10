import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgVideoOffLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M17 18.414l4.192 4.193 1.415-1.415-19.8-19.799-1.414 1.415L2.586 4H2a1 1 0 00-1 1v14a1 1 0 001 1h14a1 1 0 001-1v-.586zm-2-2V18H3V6h1.586L15 16.414zm8 1.626a.495.495 0 01-.292.454L21 16.786V8.841l-4 2.8v1.145l-2-2V6h-4.786l-2-2H16a1 1 0 011 1v4.2l5.213-3.65a.5.5 0 01.787.41v12.08z" />
    </Svg>
  );
}

export default SvgVideoOffLine;
