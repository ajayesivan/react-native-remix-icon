import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgCollapseVerticalLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M12 13.5l4.95 4.95-1.415 1.413-2.536-2.535V23h-2v-5.672L8.466 19.86l-1.414-1.414L12 13.5zM11 1v5.67L8.464 4.135 7.05 5.55 12 10.5l4.95-4.95-1.414-1.414-2.537 2.536V1h-2z" />
    </Svg>
  );
}

export default SvgCollapseVerticalLine;
