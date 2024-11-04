import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgTableFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M15 21H9V10h6v11zm2 0V10h5v10a1 1 0 01-1 1h-4zM7 21H3a1 1 0 01-1-1V10h5v11zM22 8H2V4a1 1 0 011-1h18a1 1 0 011 1v4z" />
    </Svg>
  );
}

export default SvgTableFill;
