import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgRouterLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M11 14v-3h2v3h5a1 1 0 011 1v6a1 1 0 01-1 1H6a1 1 0 01-1-1v-6a1 1 0 011-1h5zM2.51 8.837C3.835 4.864 7.584 2 12 2c4.418 0 8.166 2.864 9.49 6.837l-1.898.632a8.004 8.004 0 00-15.183 0L2.51 8.837zm3.796 1.265a6.003 6.003 0 0111.388 0l-1.898.633a4.002 4.002 0 00-7.592 0l-1.898-.633zM7 16v4h10v-4H7z" />
    </Svg>
  );
}

export default SvgRouterLine;
