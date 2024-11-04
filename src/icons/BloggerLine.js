import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgBloggerLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M3 9.009a6.01 6.01 0 016.01-6.01H12a6.01 6.01 0 016.01 5.982h.943c1.15 0 2.047.896 2.047 2.046v3.963A6.01 6.01 0 0114.99 21H9.01A6.01 6.01 0 013 14.99V9.01zm6.01-4.01A4.01 4.01 0 005 9.01v5.981A4.01 4.01 0 009.01 19h5.98A4.01 4.01 0 0019 14.99V11h-1c-1.076 0-2-.924-2-2 0-2.214-1.786-4-4-4H9.01zM8 9a1 1 0 011-1h3.5a1 1 0 110 2H9a1 1 0 01-1-1zm1 5a1 1 0 100 2h6a1 1 0 100-2H9z" />
    </Svg>
  );
}

export default SvgBloggerLine;
