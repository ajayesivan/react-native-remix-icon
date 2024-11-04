import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgAnthropicLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M14.122 5h2.146L22.1 20h-2.146L14.122 5zM7.66 5h2.681l5.77 15h-2.144l-1.538-4H5.572l-1.539 4H1.891L7.66 5zm4 9L9 7.086 6.341 14h5.319z" />
    </Svg>
  );
}

export default SvgAnthropicLine;
