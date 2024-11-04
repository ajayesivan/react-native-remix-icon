import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgProgress3Fill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zm6-10a5.98 5.98 0 01-1.757 4.243L12 12V6a6 6 0 016 6z" />
    </Svg>
  );
}

export default SvgProgress3Fill;
