import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgRedPacketFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M21.005 5.94a11.985 11.985 0 01-6.806 3.863 2.5 2.5 0 00-4.388 0A11.985 11.985 0 013.005 5.94V3.003a1 1 0 011-1h16a1 1 0 011 1V5.94zm0 2.787v12.276a1 1 0 01-1 1h-16a1 1 0 01-1-1V8.727a13.945 13.945 0 006.63 3.076 2.501 2.501 0 004.739 0 13.945 13.945 0 006.63-3.076z" />
    </Svg>
  );
}

export default SvgRedPacketFill;
