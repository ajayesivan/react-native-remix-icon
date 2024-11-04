import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgArrowRightLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2h12.172z" />
    </Svg>
  );
}

export default SvgArrowRightLine;
