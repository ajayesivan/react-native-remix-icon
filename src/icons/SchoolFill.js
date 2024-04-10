import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgSchoolFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M23 19h-1V9h-4V6.586l-6-6-6 6V9H2v10H1v2h22v-2zM6 19H4v-8h2v8zm12-8h2v8h-2v-8zm-7 1h2v7h-2v-7z" />
    </Svg>
  );
}

export default SvgSchoolFill;
