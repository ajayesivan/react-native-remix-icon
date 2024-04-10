import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgBarChartHorizontalLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M12 3v2H3V3h9zm4 16v2H3v-2h13zm6-8v2H3v-2h19z" />
    </Svg>
  );
}

export default SvgBarChartHorizontalLine;
