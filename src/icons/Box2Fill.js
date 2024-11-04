import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgBox2Fill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M12 1l9.5 5.5v11L12 23l-9.5-5.5v-11L12 1zM4.5 7.658v8.689l7.5 4.342V12L4.5 7.658z" />
    </Svg>
  );
}

export default SvgBox2Fill;
