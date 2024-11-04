import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgClockwise2Line(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M10.586 4L8.757 2.172 10.172.757 14.414 5l-4.242 4.243-1.415-1.415L10.586 6H8a3 3 0 00-3 3v4H3V9a5 5 0 015-5h2.586zM9 11a1 1 0 011-1h10a1 1 0 011 1v10a1 1 0 01-1 1H10a1 1 0 01-1-1V11zm2 1v8h8v-8h-8z" />
    </Svg>
  );
}

export default SvgClockwise2Line;
