import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgFolder4Fill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M8 21V11h14v9a1 1 0 01-1 1H8zm-2 0H3a1 1 0 01-1-1V4a1 1 0 011-1h7.414l2 2H21a1 1 0 011 1v3H7a1 1 0 00-1 1v11z" />
    </Svg>
  );
}

export default SvgFolder4Fill;
