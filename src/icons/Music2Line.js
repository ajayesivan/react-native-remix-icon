import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgMusic2Line(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M20 3v14a4 4 0 11-2-3.465V5H9v12a4 4 0 11-2-3.465V3h13zM5 19a2 2 0 100-4 2 2 0 000 4zm11 0a2 2 0 100-4 2 2 0 000 4z" />
    </Svg>
  );
}

export default SvgMusic2Line;
