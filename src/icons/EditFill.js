import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgEditFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M7.243 17.997H3v-4.243L14.435 2.319a1 1 0 011.414 0l2.829 2.828a1 1 0 010 1.415L7.243 17.997zm-4.243 2h18v2H3v-2z" />
    </Svg>
  );
}

export default SvgEditFill;
