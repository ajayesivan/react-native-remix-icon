import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgTriangleLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M12.866 3l9.526 16.5a1 1 0 01-.866 1.5H2.474a1 1 0 01-.866-1.5L11.134 3a1 1 0 011.732 0zm-8.66 16h15.588L12 5.5 4.206 19z" />
    </Svg>
  );
}

export default SvgTriangleLine;
