import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgFlaskLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M16 2v2h-1v3.243a8 8 0 00.736 3.352l4.281 9.276A1.5 1.5 0 0118.655 22H5.344a1.5 1.5 0 01-1.362-2.129l4.281-9.276A8 8 0 009 7.243V4H8V2h8zm-2.613 8.001h-2.776c-.104.363-.229.721-.374 1.071l-.158.362L6.124 20h11.75l-3.954-8.566A9.99 9.99 0 0113.387 10zM11 7.243c0 .253-.01.506-.028.758h2.057a9.59 9.59 0 01-.02-.364l-.009-.394V4h-2v3.243z" />
    </Svg>
  );
}

export default SvgFlaskLine;
