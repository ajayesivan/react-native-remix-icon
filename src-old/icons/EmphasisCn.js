import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgEmphasisCn(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M12 19a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm-5.5 0a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm11 0a1.5 1.5 0 110 3 1.5 1.5 0 010-3zM13 2v2h6v2h-1.968a18.222 18.222 0 01-3.621 6.302 14.685 14.685 0 005.327 3.042l-.536 1.93A16.685 16.685 0 0112 13.726a16.696 16.696 0 01-6.202 3.547l-.536-1.929a14.7 14.7 0 005.327-3.042 18.077 18.077 0 01-2.822-4.3h2.24A16.031 16.031 0 0012 10.876 16.168 16.168 0 0014.91 6H5V4h6V2h2z" />
    </Svg>
  );
}

export default SvgEmphasisCn;
