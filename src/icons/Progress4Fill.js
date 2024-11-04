import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgProgress4Fill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zm6-10a6 6 0 01-6 6V6a6 6 0 016 6z" />
    </Svg>
  );
}

export default SvgProgress4Fill;
