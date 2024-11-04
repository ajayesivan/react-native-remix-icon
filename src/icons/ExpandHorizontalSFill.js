import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgExpandHorizontalSFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M7.45 7.05L2.5 12l4.947 4.947L7.448 13h9.102v3.95L21.5 12l-4.95-4.95V11H7.45V7.05z" />
    </Svg>
  );
}

export default SvgExpandHorizontalSFill;
