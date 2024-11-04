import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgTwitterXFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M17.687 3.063l-4.996 5.711-4.32-5.711H2.112l7.477 9.776-7.086 8.098h3.034l5.469-6.248 4.78 6.248h6.101l-7.793-10.303 6.625-7.572h-3.033zm-1.064 16.06L5.654 4.782h1.803l10.846 14.34h-1.68z" />
    </Svg>
  );
}

export default SvgTwitterXFill;
