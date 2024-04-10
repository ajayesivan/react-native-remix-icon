import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgStickyNoteFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M15 14l-.117.007a1 1 0 00-.876.876L14 15v6H3.998A.996.996 0 013 20.007V3.993C3 3.445 3.445 3 3.993 3h16.014c.548 0 .993.447.993.998V14h-6zm6 2l-5 4.997V16h5z" />
    </Svg>
  );
}

export default SvgStickyNoteFill;
