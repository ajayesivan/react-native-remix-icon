import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgArrowUpDownFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M12 8H8.001L8 20H6V8H2l5-5 5 5zm10 8l-5 5-5-5h4V4h2v12h4z" />
    </Svg>
  );
}

export default SvgArrowUpDownFill;
