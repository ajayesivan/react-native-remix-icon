import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgMicrosoftLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M11.001 5h-6v6h6V5zm2 0v6h6V5h-6zm6 8h-6v6h6v-6zm-8 6v-6h-6v6h6zm-8-16h18v18h-18V3z" />
    </Svg>
  );
}

export default SvgMicrosoftLine;
