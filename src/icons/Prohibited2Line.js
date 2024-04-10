import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgProhibited2Line(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M16.906 5.68L5.68 16.906A8 8 0 0116.906 5.68zM7.094 18.32L18.32 7.094A8 8 0 017.094 18.32zM12 2C6.477 2 2 6.477 2 12c0 5.522 4.478 10 10 10 5.523 0 10-4.477 10-10 0-5.522-4.478-10-10-10z" />
    </Svg>
  );
}

export default SvgProhibited2Line;
