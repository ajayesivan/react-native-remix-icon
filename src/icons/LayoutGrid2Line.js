import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgLayoutGrid2Line(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M4 10h4v4H4v-4zm0 9v-3h4v3H4zm6 0v-3h4v3h-4zm6 0v-3h4v3h-4zm0-5v-4h4v4h-4zm0-6V5h4v3h-4zm-2-3v3h-4V5h4zm0 5v4h-4v-4h4zM4 8V5h4v3H4zM3 3a1 1 0 00-1 1v16a1 1 0 001 1h18a1 1 0 001-1V4a1 1 0 00-1-1H3z" />
    </Svg>
  );
}

export default SvgLayoutGrid2Line;
