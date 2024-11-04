import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgDragMoveFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M12 22l-4-4h8l-4 4zm0-20l4 4H8l4-4zm0 12a2 2 0 110-4 2 2 0 010 4zM2 12l4-4v8l-4-4zm20 0l-4 4V8l4 4z" />
    </Svg>
  );
}

export default SvgDragMoveFill;
