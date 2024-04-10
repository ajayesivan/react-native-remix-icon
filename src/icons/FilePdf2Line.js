import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgFilePdf2Line(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M5 4h10v4h4v12H5V4zM3.998 2A.995.995 0 003 2.992v18.016a1 1 0 00.993.992h16.014A1 1 0 0021 20.992V7l-5-5H3.998zM10.5 7.5c0 1.577-.456 3.437-1.225 5.153-.772 1.723-1.814 3.197-2.9 4.066l1.18 1.613c2.927-1.952 6.168-3.29 9.303-2.842l.458-1.939C14.644 12.661 12.5 9.99 12.5 7.5h-2zm.6 5.972c.267-.597.504-1.216.704-1.843a9.66 9.66 0 001.706 1.966c-.982.176-1.944.465-2.875.833.165-.314.32-.633.465-.956z" />
    </Svg>
  );
}

export default SvgFilePdf2Line;
