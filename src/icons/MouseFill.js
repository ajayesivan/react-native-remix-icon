import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgMouseFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M11.141 2h1.718c2.014 0 3.094.278 4.071.801A5.452 5.452 0 0119.2 5.07c.522.978.801 2.058.801 4.072v5.718c0 2.014-.279 3.094-.801 4.071A5.452 5.452 0 0116.93 21.2c-.977.522-2.057.801-4.071.801H11.14c-2.014 0-3.094-.279-4.072-.801a5.452 5.452 0 01-2.268-2.269C4.278 17.953 4 16.873 4 14.86V9.14c0-2.014.278-3.094.801-4.072A5.452 5.452 0 017.07 2.801C8.047 2.278 9.127 2 11.141 2zM11 6v5h2V6h-2z" />
    </Svg>
  );
}

export default SvgMouseFill;
