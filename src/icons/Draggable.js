import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgDraggable(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M8.5 7a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm0 6.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm1.5 5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15.5 7a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm1.5 5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm-1.5 8a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
    </Svg>
  );
}

export default SvgDraggable;
