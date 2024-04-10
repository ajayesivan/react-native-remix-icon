import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgSkipRightFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M17 6v12h-2V6h2zm-4 6l-6 6V6l6 6z" />
    </Svg>
  );
}

export default SvgSkipRightFill;
