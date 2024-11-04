import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgBnbFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M6.167 4.367L12 1l5.833 3.367-2.144 1.244L12 3.488 8.312 5.61 6.167 4.367zm11.666 4.246l-2.144-1.244L12 9.492 8.312 7.37 6.167 8.613V11.1l3.689 2.123v4.246L12 18.713l2.145-1.244v-4.246l3.688-2.123V8.613zm0 6.734v-2.488l-2.144 1.244v2.487l2.144-1.243zm1.523.879l-3.689 2.123v2.487L21.5 17.47v-6.734l-2.145 1.244v4.246zM17.21 6.49l2.145 1.244v2.487L21.5 8.977V6.49l-2.145-1.244-2.144 1.244zM9.856 19.25v2.487L12 22.981l2.145-1.244v-2.488L12 20.493 9.856 19.25zm-3.689-3.903l2.145 1.243v-2.487l-2.145-1.244v2.488zM9.856 6.49L12 7.734l2.145-1.244L12 5.246 9.856 6.49zM4.644 7.734L6.79 6.49 4.644 5.246 2.5 6.49v2.487l2.144 1.244V7.734zm0 4.246L2.5 10.736v6.733l5.833 3.367V18.35l-3.689-2.123V11.98z" />
    </Svg>
  );
}

export default SvgBnbFill;
