import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgLogoutBoxFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M5 2h14a1 1 0 011 1v18a1 1 0 01-1 1H5a1 1 0 01-1-1V3a1 1 0 011-1zm4 9V8l-5 4 5 4v-3h6v-2H9z" />
    </Svg>
  );
}

export default SvgLogoutBoxFill;
