import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgMedicineBottleLine(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M19 2v2h-2v3a3 3 0 013 3v11a1 1 0 01-1 1H5a1 1 0 01-1-1V10a3 3 0 013-3V4H5V2h14zm-2 7H7a1 1 0 00-1 1v10h12V10a1 1 0 00-1-1zm-4 2v2h2v2h-2.001L13 17h-2l-.001-2H9v-2h2v-2h2zm2-7H9v3h6V4z" />
    </Svg>
  );
}

export default SvgMedicineBottleLine;
