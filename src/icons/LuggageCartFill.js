import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgLuggageCartFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M5.5 20a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm13 0a1.5 1.5 0 110 3 1.5 1.5 0 010-3zM2.172 1.757L6 5.585V17L20 17v2H5a1 1 0 01-1-1V6.413L.758 3.172l1.414-1.415zM16 3a1 1 0 011 1v2h2.994C20.55 6 21 6.456 21 6.995v8.01a1 1 0 01-1.006.995H8.007A1.008 1.008 0 017 15.005v-8.01A1 1 0 018.007 6H11V4a1 1 0 011-1h4zm-5 5h-1v6h1V8zm7 0h-1v6h1V8zm-3-3h-2v1h2V5z" />
    </Svg>
  );
}

export default SvgLuggageCartFill;
