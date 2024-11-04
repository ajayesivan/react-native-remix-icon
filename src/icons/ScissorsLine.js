import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgScissorsLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M9.446 8.029L12 10.582l6.728-6.727a2 2 0 012.828 0l-12.11 12.11a4 4 0 11-1.414-1.414l2.554-2.554-2.554-2.554a4 4 0 111.414-1.414zm5.38 5.379l6.73 6.73a2 2 0 01-2.828 0l-5.317-5.316 1.415-1.414zm-7.412 3.175a2 2 0 10-2.828 2.828 2 2 0 002.828-2.829zm0-9.172a2 2 0 10-2.828-2.828A2 2 0 007.414 7.41z" />
    </Svg>
  );
}

export default SvgScissorsLine;
