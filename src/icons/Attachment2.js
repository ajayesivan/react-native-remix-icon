import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgAttachment2(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M14.829 7.757l-5.657 5.657a1 1 0 101.414 1.414l5.657-5.656A3 3 0 0012 4.929l-5.657 5.657a5 5 0 007.071 7.07L19.071 12l1.414 1.414-5.656 5.657a7 7 0 01-9.9-9.9l5.657-5.656a5 5 0 017.071 7.07L12 16.244A3 3 0 017.758 12l5.656-5.657 1.415 1.414z" />
    </Svg>
  );
}

export default SvgAttachment2;
