import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgCamera2Line(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M2 3.993A1 1 0 012.992 3h18.016c.548 0 .992.445.992.993v16.014a1 1 0 01-.992.993H2.992A.993.993 0 012 20.007V3.993zM4 5v14h16V5H4zm8 10a3 3 0 100-6 3 3 0 000 6zm0 2a5 5 0 110-10 5 5 0 010 10zm5-11h2v2h-2V6z" />
    </Svg>
  );
}

export default SvgCamera2Line;
