import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgSettings2Line(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M8.686 4l2.607-2.607a1 1 0 011.414 0L15.314 4H19a1 1 0 011 1v3.686l2.607 2.607a1 1 0 010 1.414L20 15.314V19a1 1 0 01-1 1h-3.686l-2.607 2.607a1 1 0 01-1.414 0L8.686 20H5a1 1 0 01-1-1v-3.686l-2.607-2.607a1 1 0 010-1.414L4 8.686V5a1 1 0 011-1h3.686zM6 6v3.515L3.515 12 6 14.485V18h3.515L12 20.485 14.485 18H18v-3.515L20.485 12 18 9.515V6h-3.515L12 3.515 9.515 6H6zm6 10a4 4 0 110-8 4 4 0 010 8zm0-2a2 2 0 100-4 2 2 0 000 4z" />
    </Svg>
  );
}

export default SvgSettings2Line;
