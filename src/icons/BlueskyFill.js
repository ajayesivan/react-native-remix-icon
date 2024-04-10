import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgBlueskyFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M12 11.388c-.906-1.761-3.372-5.044-5.665-6.662-2.197-1.55-3.034-1.283-3.583-1.033C2.116 3.978 2 4.955 2 5.528c0 .575.315 4.709.52 5.4.68 2.28 3.094 3.05 5.32 2.803-3.26.483-6.157 1.67-2.36 5.898 4.178 4.325 5.726-.927 6.52-3.59.794 2.663 1.708 7.726 6.444 3.59 3.556-3.59.977-5.415-2.283-5.898 2.225.247 4.64-.523 5.319-2.803.205-.69.52-4.825.52-5.399 0-.575-.116-1.55-.752-1.838-.549-.248-1.386-.517-3.583 1.033-2.293 1.621-4.76 4.904-5.665 6.664z" />
    </Svg>
  );
}

export default SvgBlueskyFill;