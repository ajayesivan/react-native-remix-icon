import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgFocus2Line(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M12 20a8 8 0 100-16 8 8 0 000 16zm0 2C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-6a4 4 0 100-8 4 4 0 000 8zm0 2a6 6 0 110-12 6 6 0 010 12zm0-4a2 2 0 110-4 2 2 0 010 4z" />
    </Svg>
  );
}

export default SvgFocus2Line;
