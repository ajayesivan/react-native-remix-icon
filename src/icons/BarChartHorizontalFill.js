import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgBarChartHorizontalFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M12 3v4H3V3h9zm4 14v4H3v-4h13zm6-7v4H3v-4h19z" />
    </Svg>
  );
}

export default SvgBarChartHorizontalFill;
