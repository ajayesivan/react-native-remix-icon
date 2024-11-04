import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgBug2Fill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M5.07 16A7.06 7.06 0 015 15v-1H3v-2h2v-1c0-.34.024-.673.07-1H3V8h2.674a7.03 7.03 0 012.84-3.072l-1.05-1.05L8.88 2.465l1.683 1.684a7.03 7.03 0 012.876 0l1.683-1.684 1.414 1.415-1.05 1.05A7.031 7.031 0 0118.327 8H21v2h-2.07c.046.327.07.66.07 1v1h2v2h-2v1c0 .34-.024.673-.07 1H21v2h-2.674a7 7 0 01-12.652 0H3v-2h2.07zM9 10v2h6v-2H9zm0 4v2h6v-2H9z" />
    </Svg>
  );
}

export default SvgBug2Fill;
