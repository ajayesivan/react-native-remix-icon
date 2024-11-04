import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgProfileLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M21.008 3c.548 0 .992.445.992.993v16.014a1 1 0 01-.992.993H2.992A.993.993 0 012 20.007V3.993A1 1 0 012.992 3h18.016zM20 5H4v14h16V5zm-2 10v2H6v-2h12zm-6-8v6H6V7h6zm6 4v2h-4v-2h4zm-8-2H8v2h2V9zm8-2v2h-4V7h4z" />
    </Svg>
  );
}

export default SvgProfileLine;
