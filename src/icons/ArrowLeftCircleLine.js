import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgArrowLeftCircleLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M12 2c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2zm0 18c4.42 0 8-3.58 8-8s-3.58-8-8-8-8 3.58-8 8 3.58 8 8 8zm0-9h4v2h-4v3l-4-4 4-4v3z" />
    </Svg>
  );
}

export default SvgArrowLeftCircleLine;
