import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgSpeechToTextLine = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    {...props}
  >
    <Path d="M18 3a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4v-3.5h2V17a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-8V3zm0 8h-3v6h-2v-6h-3V9h8zM5.657 1.343A7.98 7.98 0 0 1 8 7c0 2.21-.895 4.21-2.343 5.657l-1.415-1.415A5.98 5.98 0 0 0 6 7a5.98 5.98 0 0 0-1.758-4.242zM2.828 4.172A3.99 3.99 0 0 1 4 7a3.99 3.99 0 0 1-1.172 2.828L1.414 8.414C1.776 8.052 2 7.552 2 7s-.224-1.052-.586-1.414z" />
  </Svg>
);
export default SvgSpeechToTextLine;
