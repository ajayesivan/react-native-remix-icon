import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgCameraOffFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M19.586 21H3a1 1 0 01-1-1V6a1 1 0 011-1h.586L1.394 2.808l1.414-1.415 19.799 19.8-1.415 1.414L19.586 21zM7.556 8.97a6 6 0 008.475 8.475l-1.417-1.417a4 4 0 01-5.642-5.642L7.555 8.97zM22 17.786l-4.045-4.045a6 6 0 00-6.695-6.695L8.107 3.892 9 3h6l2 2h4a1 1 0 011 1v11.786zm-8.492-8.492a4.014 4.014 0 012.198 2.198l-2.197-2.198z" />
    </Svg>
  );
}

export default SvgCameraOffFill;
