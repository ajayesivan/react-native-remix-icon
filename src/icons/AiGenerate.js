import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgAiGenerate(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M15 5.25A3.25 3.25 0 0018.25 2h1.5A3.25 3.25 0 0023 5.25v1.5A3.25 3.25 0 0019.75 10h-1.5A3.25 3.25 0 0015 6.75v-1.5zM4 7a2 2 0 012-2h7V3H6a4 4 0 00-4 4v10a4 4 0 004 4h12a4 4 0 004-4v-5h-2v5a2 2 0 01-2 2H6a2 2 0 01-2-2V7z" />
    </Svg>
  );
}

export default SvgAiGenerate;
