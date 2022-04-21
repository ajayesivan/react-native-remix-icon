import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgAttachment2(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M14.828 7.757l-5.656 5.657a1 1 0 101.414 1.414l5.657-5.656A3 3 0 1012 4.929l-5.657 5.657a5 5 0 107.071 7.07L19.071 12l1.414 1.414-5.657 5.657a7 7 0 11-9.9-9.9l5.658-5.656a5 5 0 017.07 7.07L12 16.244A3 3 0 117.757 12l5.657-5.657 1.414 1.414z" />
    </Svg>
  );
}

export default SvgAttachment2;
