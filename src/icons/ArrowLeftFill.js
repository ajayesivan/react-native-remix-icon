import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgArrowLeftFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M12 13v7l-8-8 8-8v7h8v2h-8z" />
    </Svg>
  );
}

export default SvgArrowLeftFill;
