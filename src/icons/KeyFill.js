import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgKeyFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M17 14h-4.341a6 6 0 110-4H23v4h-2v4h-4v-4zM7 14a2 2 0 100-4 2 2 0 000 4z" />
    </Svg>
  );
}

export default SvgKeyFill;
