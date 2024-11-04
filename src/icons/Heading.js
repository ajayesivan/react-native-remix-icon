import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgHeading(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M17 11V4h2v17h-2v-8H7v8H5V4h2v7h10z" />
    </Svg>
  );
}

export default SvgHeading;
