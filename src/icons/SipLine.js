import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgSipLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M6.457 18.954l8.564-8.564-1.414-1.414-8.564 8.564 1.414 1.414zm5.735-11.392l-1.414-1.414 1.414-1.415 1.768 1.768 2.829-2.828a1 1 0 011.414 0l2.121 2.121a1 1 0 010 1.414l-2.828 2.829 1.768 1.767-1.415 1.415-1.414-1.415-9.192 9.193H3v-4.243l9.192-9.192z" />
    </Svg>
  );
}

export default SvgSipLine;
