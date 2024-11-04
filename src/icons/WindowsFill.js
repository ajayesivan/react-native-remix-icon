import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgWindowsFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M3.001 5.479l7.377-1.016v7.127H3V5.48zm0 13.042l7.377 1.017v-7.04H3v6.023zm8.188 1.125L21.001 21v-8.502h-9.812v7.148zm0-15.292v7.236h9.812V3l-9.812 1.354z" />
    </Svg>
  );
}

export default SvgWindowsFill;
