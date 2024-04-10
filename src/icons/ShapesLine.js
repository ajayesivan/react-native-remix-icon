import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgShapesLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M12 1L6 11h12L12 1zm0 3.887L14.468 9H9.532L12 4.887zM6.75 20a2.75 2.75 0 110-5.5 2.75 2.75 0 010 5.5zm0 2a4.75 4.75 0 100-9.5 4.75 4.75 0 000 9.5zM15 15.5v4h4v-4h-4zm-2 6v-8h8v8h-8z" />
    </Svg>
  );
}

export default SvgShapesLine;
