import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgBearSmileFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M17.5 2a4.5 4.5 0 012.951 7.897c.355.967.549 2.013.549 3.103a9 9 0 11-18 0c0-1.09.194-2.136.55-3.103a4.5 4.5 0 116.791-5.744 9.05 9.05 0 013.32 0A4.494 4.494 0 0117.5 2zM10 13H8a4 4 0 008 0h-2a2 2 0 11-4 0z" />
    </Svg>
  );
}

export default SvgBearSmileFill;
