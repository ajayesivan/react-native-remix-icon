import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgInformation2Line(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 100-16 8 8 0 000 16zm1-9.5V15h1v2h-4v-2h1v-2.5h-1v-2h3zm.5-2.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
    </Svg>
  );
}

export default SvgInformation2Line;
