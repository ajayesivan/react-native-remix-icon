import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgMenuUnfold2Line(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M20.596 3.903L15.999 8.5l4.597 4.596 1.414-1.415L18.828 8.5l3.182-3.182-1.414-1.415zM21 20v-2H3v2h18zm-9-7v-2H3v2h9zm0-7V4H3v2h9z" />
    </Svg>
  );
}

export default SvgMenuUnfold2Line;
