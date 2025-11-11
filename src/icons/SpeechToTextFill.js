import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgSpeechToTextFill = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    {...props}
  >
    <Path d="M18 3a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4v-5.001l2.268 2.268c.666.665 1.722.792 2.421.162A9.97 9.97 0 0 0 10 7c0-1.423-.3-2.775-.837-4zm-8 8h3v6h2v-6h3V9h-8zM5.657 1.343A7.98 7.98 0 0 1 8 7c0 2.21-.895 4.21-2.343 5.657l-1.415-1.415A5.98 5.98 0 0 0 6 7a5.98 5.98 0 0 0-1.758-4.242zM2.828 4.172A3.99 3.99 0 0 1 4 7a3.99 3.99 0 0 1-1.172 2.828L1.414 8.414C1.776 8.052 2 7.552 2 7s-.224-1.052-.586-1.414z" />
  </Svg>
);
export default SvgSpeechToTextFill;
