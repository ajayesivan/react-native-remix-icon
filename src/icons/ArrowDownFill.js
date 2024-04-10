import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgArrowDownFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M13 12h7l-8 8-8-8h7V4h2v8z" />
    </Svg>
  );
}

export default SvgArrowDownFill;
