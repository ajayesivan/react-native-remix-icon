import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgMenuUnfold2Fill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M21 3.5v10l-5-5 5-5zM21 20v-2H3v2h18zm-9-7v-2H3v2h9zm0-7V4H3v2h9z" />
    </Svg>
  );
}

export default SvgMenuUnfold2Fill;
