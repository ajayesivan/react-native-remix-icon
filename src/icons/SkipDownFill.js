import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgSkipDownFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M18 17H6v-2h12v2zm-6-4l6-6H6l6 6z" />
    </Svg>
  );
}

export default SvgSkipDownFill;
