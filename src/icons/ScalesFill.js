import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgScalesFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M12.998 2v1h7v2h-7v14h4v2h-10v-2h4V5h-7V3h7V2h2zm-8 4.343l2.828 2.829a4 4 0 11-5.657 0L5 6.343zm14 0l2.828 2.829a4 4 0 11-5.657 0l2.829-2.829zm0 2.829l-1.414 1.414A1.987 1.987 0 0016.998 12l4 .001c0-.54-.212-1.041-.586-1.415l-1.414-1.414zm-14 0l-1.414 1.414A1.987 1.987 0 002.998 12l4 .001c0-.54-.212-1.041-.586-1.415L4.998 9.172z" />
    </Svg>
  );
}

export default SvgScalesFill;
