import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgNewsLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M2 4a1 1 0 011-1h18a1 1 0 011 1v16a1 1 0 01-1 1H3a1 1 0 01-1-1V4zm2 1v14h16V5H4zm2 2h6v6H6V7zm2 2v2h2V9H8zm6 0h4V7h-4v2zm4 4h-4v-2h4v2zM6 15v2h12v-2H6z" />
    </Svg>
  );
}

export default SvgNewsLine;
