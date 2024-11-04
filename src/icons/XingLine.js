import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgXingLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M20.444 3.5L13.81 14.99 17.857 22h-2.31l-4.045-7.009H11.5L18.134 3.5h2.31zM8.31 7l2.422 4.196-.002.001L7.67 16.5H5.36l3.061-5.305L6.002 7H8.31z" />
    </Svg>
  );
}

export default SvgXingLine;
