import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgFileWord2Fill(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M17 3h4a1 1 0 011 1v16a1 1 0 01-1 1h-4V3zM2.859 2.877l12.57-1.795a.5.5 0 01.571.495v20.846a.5.5 0 01-.57.495L2.858 21.123a1 1 0 01-.859-.99V3.867a1 1 0 01.859-.99zM11 8v4.989L9 11l-1.99 2L7 8H5v8h2l2-2 2 2h2V8h-2z" />
    </Svg>
  );
}

export default SvgFileWord2Fill;
