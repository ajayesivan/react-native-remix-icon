import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgPagesFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M20 22H4a1 1 0 01-1-1V8h18v13a1 1 0 01-1 1zm1-16H3V3a1 1 0 011-1h16a1 1 0 011 1v3zM7 11v4h4v-4H7zm0 6v2h10v-2H7zm6-5v2h4v-2h-4z" />
    </Svg>
  );
}

export default SvgPagesFill;
