import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgTapeFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M10.83 13A3 3 0 108 15h8a3 3 0 10-2.83-2h-2.34zM3 3h18a1 1 0 011 1v16a1 1 0 01-1 1H3a1 1 0 01-1-1V4a1 1 0 011-1zm13 10a1 1 0 110-2 1 1 0 010 2zm-8 0a1 1 0 110-2 1 1 0 010 2z" />
    </Svg>
  );
}

export default SvgTapeFill;
