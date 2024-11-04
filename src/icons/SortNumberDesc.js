import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgSortNumberDesc(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M9 11V3H7.314L5 3.62v2.329l2-.539V11h2zm13-3l-4-5-4 5h3v13h2V8h3zM8 16.5a1 1 0 110-2 1 1 0 010 2zm2.573.544a3 3 0 10-3.121 1.406L5.979 21h2.31l2.284-3.956z" />
    </Svg>
  );
}

export default SvgSortNumberDesc;
