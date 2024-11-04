import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgExpandVerticalLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M12 .5l4.95 4.95-1.415 1.413-2.536-2.535V10h-2V4.328L8.466 6.86 7.052 5.447 12 .5zM11 14v5.67l-2.536-2.535L7.05 18.55 12 23.5l4.95-4.95-1.414-1.414-2.537 2.536v-5.673h-2z" />
    </Svg>
  );
}

export default SvgExpandVerticalLine;
