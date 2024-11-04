import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgFilterOffFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M6.929.515L21.07 14.657l-1.414 1.414-3.823-3.822L14 14.999v7h-4v-7L4 6H3V4h4.585l-2.07-2.07L6.929.515zM21 4v2h-1l-1.915 2.872L13.213 4H21z" />
    </Svg>
  );
}

export default SvgFilterOffFill;
