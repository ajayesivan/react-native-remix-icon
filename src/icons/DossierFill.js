import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgDossierFill = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    {...props}
  >
    <Path d="M17 2v2h3a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h3V2zm-4 9h-2v2H9v2h1.999L11 17h2l-.001-2H15v-2h-2zm2-7H9v2h6z" />
  </Svg>
);
export default SvgDossierFill;
