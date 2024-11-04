import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgShapesFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M12 1l6 10H6l6-10zm1 12.5h8v8h-8v-8zM6.75 22a4.75 4.75 0 100-9.5 4.75 4.75 0 000 9.5z" />
    </Svg>
  );
}

export default SvgShapesFill;
