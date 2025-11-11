import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgTextToSpeechFill = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    {...props}
  >
    <Path d="M13.414 5.586a2 2 0 0 0 0 2.828l5.853 5.853c.666.665 1.722.792 2.422.162q.159-.145.311-.296V17a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4h10zM6 11h3v6h2v-6h3V9H6zm14.657-9.657A7.98 7.98 0 0 1 23 7c0 2.21-.895 4.21-2.343 5.657l-1.415-1.415A5.98 5.98 0 0 0 21 7a5.98 5.98 0 0 0-1.758-4.242zm-2.829 2.829A3.99 3.99 0 0 1 19 7a3.99 3.99 0 0 1-1.172 2.828l-1.414-1.414C16.776 8.052 17 7.552 17 7s-.224-1.052-.586-1.414z" />
  </Svg>
);
export default SvgTextToSpeechFill;
