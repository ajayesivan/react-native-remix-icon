import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgSlackLine(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M14.5 3A1.5 1.5 0 0116 4.5v5a1.5 1.5 0 01-3 0v-5A1.5 1.5 0 0114.5 3zm-10 10H6v1.5A1.5 1.5 0 114.5 13zm8.5 5h1.5a1.5 1.5 0 11-1.5 1.5V18zm1.5-5h5a1.5 1.5 0 010 3h-5a1.5 1.5 0 010-3zm5-5a1.5 1.5 0 010 3H18V9.5A1.5 1.5 0 0119.5 8zm-15 0h5a1.5 1.5 0 010 3h-5a1.5 1.5 0 010-3zm5-5A1.5 1.5 0 0111 4.5V6H9.5a1.5 1.5 0 010-3zm0 10a1.5 1.5 0 011.5 1.5v5a1.5 1.5 0 01-3 0v-5A1.5 1.5 0 019.5 13z" />
    </Svg>
  );
}

export default SvgSlackLine;
