import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgExpandHorizontalFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M.5 12l4.95-4.95L5.449 11H10v2H5.448v3.947L.5 12zM14 13h4.55v3.95L23.5 12l-4.95-4.95V11H14v2z" />
    </Svg>
  );
}

export default SvgExpandHorizontalFill;
