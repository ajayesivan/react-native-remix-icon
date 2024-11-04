import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgSpam2Fill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M15.936 2.501l5.565 5.565v7.87l-5.565 5.565h-7.87l-5.565-5.565v-7.87l5.565-5.565h7.87zM11 15.001v2h2v-2h-2zm0-8v6h2V7h-2z" />
    </Svg>
  );
}

export default SvgSpam2Fill;
