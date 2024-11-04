import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgPrinterCloudLine = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    {...props}
  >
    <Path d="M17 2a1 1 0 0 1 1 1v4h3a1 1 0 0 1 1 1v5.324a6 6 0 0 0-.61-.713A5.6 5.6 0 0 0 20 11.583V9H4v8h2v-1a1 1 0 0 1 1-1h5.194a5 5 0 0 0-.07.283q-.645.428-1.142 1.074-.24.312-.42.643H8v3h2.054a4.5 4.5 0 0 0 .817 2H7a1 1 0 0 1-1-1v-2H3a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h3V3a1 1 0 0 1 1-1zm-1 2H8v3h8zm-8 6v2H5v-2zm13 6.5a3.5 3.5 0 1 0-7 0l.003.102a2.751 2.751 0 0 0 .58 5.393l.167.005h5.5l.168-.005a2.75 2.75 0 0 0 .58-5.392zm-4.993-.145a1.5 1.5 0 0 1 2.986 0L19 16.5v1.62q1.044.298 1.444.406A.75.75 0 0 1 20.255 20h-5.51a.75.75 0 0 1-.19-1.474q.357-.096 1.22-.342L16 18.12V16.5z" />
  </Svg>
);
export default SvgPrinterCloudLine;
