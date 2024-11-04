import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgForward10Line(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10h-2a8 8 0 11-1.384-4.5H16v1.25a2.5 2.5 0 00-4 2v2.5a2.5 2.5 0 005 0v-2.5c0-.455-.122-.882-.334-1.25H22v-6h-2V6a9.985 9.985 0 00-8-4zm3.5 8.75v2.5a1 1 0 11-2 0v-2.5a1 1 0 112 0zM10 8.5H8.5v7H10v-7z" />
    </Svg>
  );
}

export default SvgForward10Line;
