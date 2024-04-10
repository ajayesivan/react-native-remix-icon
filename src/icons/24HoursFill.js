import * as React from "react";
import Svg, { Path } from "react-native-svg";

function Svg24HoursFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M12.005 13.003a3 3 0 012.08 5.162l-1.91 1.837h2.83v2h-6l-.001-1.724 3.694-3.555a1 1 0 10-1.693-.72h-2a3 3 0 013-3zm6 0v4h2v-4h2v9h-2v-3h-4v-6h2zm-14-1a7.985 7.985 0 003 6.245v2.417a9.996 9.996 0 01-5-8.662h2zm8-10c5.185 0 9.449 3.946 9.95 9h-2.012A8.001 8.001 0 005.87 6.868l2.135 2.135h-6v-6L4.45 5.449a9.977 9.977 0 017.554-3.446z" />
    </Svg>
  );
}

export default Svg24HoursFill;
