import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgLayoutRight2Fill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M21 3a1 1 0 011 1v16a1 1 0 01-1 1H3a1 1 0 01-1-1V4a1 1 0 011-1h18zm-2 3h-2v12h2V6z" />
    </Svg>
  );
}

export default SvgLayoutRight2Fill;
