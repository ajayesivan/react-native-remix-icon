import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgArrowLeftRightLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M16.05 12.05L21 17l-4.95 4.95-1.414-1.415L17.172 18H4v-2h13.172l-2.536-2.535 1.414-1.414zm-8.1-10l1.414 1.414-2.536 2.535H20v2H6.828l2.536 2.536L7.95 11.95 3 7l4.95-4.95z" />
    </Svg>
  );
}

export default SvgArrowLeftRightLine;
