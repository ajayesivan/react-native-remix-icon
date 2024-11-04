import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgBarChart2Fill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M2 13h6v8H2v-8zM9 3h6v18H9V3zm7 5h6v13h-6V8z" />
    </Svg>
  );
}

export default SvgBarChart2Fill;
