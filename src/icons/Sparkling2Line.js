import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgSparkling2Line(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M17 1.208l1.32 2.473L20.792 5 18.32 6.319l-1.318 2.473-1.32-2.473-2.472-1.32 2.473-1.318L17 1.208zm-6.333 8.125l5 2.667-5 2.667-2.666 5-2.667-5-5-2.667 5-2.667 2.667-5 2.666 5zm.75 2.667L9.19 10.812 8.001 8.582l-1.189 2.229L4.584 12l2.228 1.188 1.189 2.229 1.188-2.229L11.417 12zm8.25 4.333l-1.666-3.125-1.667 3.125L13.209 18l3.125 1.667 1.667 3.125 1.666-3.125L22.792 18l-3.125-1.667z" />
    </Svg>
  );
}

export default SvgSparkling2Line;
