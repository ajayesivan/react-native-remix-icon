import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgExpandHeightFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M18 2H6v2h12V2zm-1.05 7.45L12 4.5 7.053 9.447 11 9.448v5.102H7.05L12 19.5l4.95-4.95H13V9.45h3.95zM18 20v2H6v-2h12z" />
    </Svg>
  );
}

export default SvgExpandHeightFill;
