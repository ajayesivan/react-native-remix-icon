import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgArrowLeftDoubleFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M4.836 12l6.207 6.207 1.414-1.414L7.664 12l4.793-4.793-1.414-1.414L4.836 12zm5.65 0l6.207 6.207 1.414-1.414L13.314 12l4.793-4.793-1.414-1.414L10.486 12z" />
    </Svg>
  );
}

export default SvgArrowLeftDoubleFill;
