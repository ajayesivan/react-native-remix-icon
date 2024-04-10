import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgInbox2Line(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M4.024 3.783A1 1 0 015 3h14a1 1 0 01.976.783l2 9c.016.071.024.144.024.217v7a1 1 0 01-1 1H3a1 1 0 01-1-1v-7a1 1 0 01.024-.217l2-9zM5.802 5l-1.555 7H9a3 3 0 106 0h4.753l-1.555-7H5.802zm10.782 9a5.001 5.001 0 01-9.168 0H4v5h16v-5h-3.416z" />
    </Svg>
  );
}

export default SvgInbox2Line;
