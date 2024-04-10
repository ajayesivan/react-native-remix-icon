import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgKey2Fill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M10.313 11.566l7.94-7.94 2.121 2.12-1.414 1.415 2.121 2.121-3.535 3.536-2.121-2.121-2.99 2.99a5.002 5.002 0 01-7.97 5.848 5 5 0 015.848-7.97zm-.899 5.848a2 2 0 10-2.828-2.828 2 2 0 002.828 2.828z" />
    </Svg>
  );
}

export default SvgKey2Fill;
