import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgArrowDownBoxFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M4 3a1 1 0 00-1 1v16a1 1 0 001 1h16a1 1 0 001-1V4a1 1 0 00-1-1H4zm8 14.656l-5.95-5.95H11V6.342h2v5.364h4.95L12 17.656z" />
    </Svg>
  );
}

export default SvgArrowDownBoxFill;
