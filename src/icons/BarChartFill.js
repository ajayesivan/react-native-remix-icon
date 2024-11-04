import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgBarChartFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M3 12h4v9H3v-9zm14-4h4v13h-4V8zm-7-6h4v19h-4V2z" />
    </Svg>
  );
}

export default SvgBarChartFill;
