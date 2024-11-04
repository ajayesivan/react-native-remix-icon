import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgCloudyFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M9 20.985a8.5 8.5 0 117.715-12.982A6.5 6.5 0 0117 20.981V21H9v-.015z" />
    </Svg>
  );
}

export default SvgCloudyFill;
