import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgNumbersFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M9 18H4v-8h5v8zm6 0h-5V6h5v12zm6 0h-5V2h5v16zm1 4H3v-2h19v2z" />
    </Svg>
  );
}

export default SvgNumbersFill;
