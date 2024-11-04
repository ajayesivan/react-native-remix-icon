import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgNextjsFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm4-14h-1.35v4H16V8zM9.346 9.71l6.059 7.828 1.054-.809L9.683 8H8v7.997h1.346V9.709z" />
    </Svg>
  );
}

export default SvgNextjsFill;
