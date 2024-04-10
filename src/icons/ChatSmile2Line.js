import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgChatSmile2Line(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M7.291 20.824L2 22l1.176-5.291A9.956 9.956 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10a9.956 9.956 0 01-4.709-1.176zm.29-2.113l.653.35A7.955 7.955 0 0012 20a8 8 0 10-8-8c0 1.335.325 2.617.94 3.766l.349.653-.655 2.947 2.947-.655zM7 12h2a3 3 0 106 0h2a5 5 0 01-10 0z" />
    </Svg>
  );
}

export default SvgChatSmile2Line;
