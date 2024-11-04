import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgSpam3Line(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M15.936 2.501l5.565 5.565v7.87l-5.565 5.565h-7.87l-5.565-5.565v-7.87l5.565-5.565h7.87zm-.828 2H8.894L4.501 8.894v6.214L8.894 19.5h6.214l4.393-4.393V8.894l-4.393-4.393zM8 11.001h8v2H8v-2z" />
    </Svg>
  );
}

export default SvgSpam3Line;
