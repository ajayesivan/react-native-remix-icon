import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgAdminFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M12 14v8H4a8 8 0 018-8zm0-1c-3.315 0-6-2.685-6-6s2.685-6 6-6 6 2.685 6 6-2.685 6-6 6zm9 4h1v5h-8v-5h1v-1a3 3 0 116 0v1zm-2 0v-1a1 1 0 10-2 0v1h2z" />
    </Svg>
  );
}

export default SvgAdminFill;
