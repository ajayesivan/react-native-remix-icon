import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgBuildingFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M21 19h2v2H1v-2h2V4a1 1 0 011-1h10a1 1 0 011 1v15h2V9h3a1 1 0 011 1v9zM7 11v2h4v-2H7zm0-4v2h4V7H7z" />
    </Svg>
  );
}

export default SvgBuildingFill;
