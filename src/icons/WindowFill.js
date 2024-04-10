import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgWindowFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M3 3h18a1 1 0 011 1v16a1 1 0 01-1 1H3a1 1 0 01-1-1V4a1 1 0 011-1zm17 7H4v9h16v-9zM5 6v2h2V6H5zm4 0v2h2V6H9z" />
    </Svg>
  );
}

export default SvgWindowFill;
