import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgPlayLargeLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M8 18.392V5.607L18.226 12 8 18.392zM6 3.804v16.392a1 1 0 001.53.848l13.113-8.196a1 1 0 000-1.696L7.53 2.956A1 1 0 006 3.804z" />
    </Svg>
  );
}

export default SvgPlayLargeLine;
