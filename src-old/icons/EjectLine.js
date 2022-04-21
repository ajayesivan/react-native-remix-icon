import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgEjectLine(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M7.737 13h8.526L12 6.606 7.737 13zm4.679-9.376l7.066 10.599a.5.5 0 01-.416.777H4.934a.5.5 0 01-.416-.777l7.066-10.599a.5.5 0 01.832 0zM5 17h14a1 1 0 010 2H5a1 1 0 010-2z" />
    </Svg>
  );
}

export default SvgEjectLine;
