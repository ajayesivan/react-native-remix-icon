import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgCollapseVerticalFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M12 13.5l4.95 4.95-3.95-.002V23h-2v-4.552l-3.948-.001L12 13.5zM11 1v4.55H7.05L12 10.5l4.95-4.95H13V1h-2z" />
    </Svg>
  );
}

export default SvgCollapseVerticalFill;
