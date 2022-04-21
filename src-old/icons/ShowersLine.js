import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgShowersLine(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M5 16.93a8 8 0 1111.458-9.831A5.5 5.5 0 0119 17.793v-2.13a3.5 3.5 0 10-4-5.612V10a6 6 0 10-10 4.472v2.458zM7 16h2v4H7v-4zm8 0h2v4h-2v-4zm-4 3h2v4h-2v-4z" />
    </Svg>
  );
}

export default SvgShowersLine;
