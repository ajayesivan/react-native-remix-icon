import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgSpectrumFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M13.2 2.006C21.24 2.093 22 3.25 22 12l-.005 1.2C21.908 21.24 20.75 22 12 22l-1.2-.006c-7.658-.083-8.712-1.136-8.794-8.795L2 11.691l.006-.89c.085-7.85 1.19-8.76 9.381-8.8l1.812.005zM8.25 7h-.583a.667.667 0 00-.66.568l-.006.099v3.666c0 .335.246.612.568.66l.098.007h.584a3.75 3.75 0 013.744 3.55l.006.2v.583c0 .335.246.612.568.66l.098.007h3.667a.667.667 0 00.66-.568l.007-.099v-.583a8.75 8.75 0 00-8.492-8.746L8.25 7z" />
    </Svg>
  );
}

export default SvgSpectrumFill;
