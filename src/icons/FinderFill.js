import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgFinderFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M21.001 3a1 1 0 011 1v16a1 1 0 01-1 1h-18a1 1 0 01-1-1V4a1 1 0 011-1h18zm-1 2h-8.465c-.69 1.977-1.035 4.644-1.035 8h3a17.15 17.15 0 00-.107 2.877c1.226-.211 2.704-.777 4.027-1.71l1.135 1.665c-1.642 1.095-3.303 1.779-4.976 2.043.052.37.113.745.184 1.125h6.237V5zM6.556 14.168l-1.11 1.664C7.603 17.27 9.793 18 12.001 18v-2c-1.792 0-3.602-.603-5.445-1.832zM17 7a1 1 0 011 1v1a1 1 0 11-2 0V8a1 1 0 011-1zm-10 0c-.552 0-1 .452-1 1v1a1 1 0 102 0V8a1 1 0 00-1-1z" />
    </Svg>
  );
}

export default SvgFinderFill;
