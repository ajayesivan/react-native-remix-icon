import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgTextToSpeechLine = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    {...props}
  >
    <Path d="M14.5 5H6a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2.5h2V17a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4h8.5zm-.5 6h-3v6H9v-6H6V9h8zm6.657-9.657A7.98 7.98 0 0 1 23 7c0 2.21-.895 4.21-2.343 5.657l-1.415-1.415A5.98 5.98 0 0 0 21 7a5.98 5.98 0 0 0-1.758-4.242zm-2.829 2.829A3.99 3.99 0 0 1 19 7a3.99 3.99 0 0 1-1.172 2.828l-1.414-1.414C16.776 8.052 17 7.552 17 7s-.224-1.052-.586-1.414z" />
  </Svg>
);
export default SvgTextToSpeechLine;
