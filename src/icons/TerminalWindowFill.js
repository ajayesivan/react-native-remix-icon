import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgTerminalWindowFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M20 10H4v9h16v-9zM3 3h18a1 1 0 011 1v16a1 1 0 01-1 1H3a1 1 0 01-1-1V4a1 1 0 011-1zm2 3v2h2V6H5zm4 0v2h2V6H9zm-4 5h3v5H5v-5z" />
    </Svg>
  );
}

export default SvgTerminalWindowFill;
