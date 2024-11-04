import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgArrowUpWideLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M12 8.369l8.968 4.747-.936 1.768L12 10.632l-8.032 4.252-.936-1.768L12 8.37z" />
    </Svg>
  );
}

export default SvgArrowUpWideLine;
