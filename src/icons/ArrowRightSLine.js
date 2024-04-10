import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgArrowRightSLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M13.172 12l-4.95-4.95 1.414-1.413L16 12l-6.364 6.364-1.414-1.415 4.95-4.95z" />
    </Svg>
  );
}

export default SvgArrowRightSLine;
