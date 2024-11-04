import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgTriangularFlagFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M5.66 2.181C5.016 1.613 4 2.071 4 2.932V22h2v-4h14.99c.922 0 1.352-1.142.66-1.75L5.66 2.18z" />
    </Svg>
  );
}

export default SvgTriangularFlagFill;
