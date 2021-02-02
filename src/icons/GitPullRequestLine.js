import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgGitPullRequestLine(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M15 5h2a2 2 0 012 2v8.17a3.001 3.001 0 11-2 0V7h-2v3l-4.5-4L15 2v3zM5 8.83a3.001 3.001 0 112 0v6.34a3.001 3.001 0 11-2 0V8.83zM6 7a1 1 0 100-2 1 1 0 000 2zm0 12a1 1 0 100-2 1 1 0 000 2zm12 0a1 1 0 100-2 1 1 0 000 2z" />
    </Svg>
  );
}

export default SvgGitPullRequestLine;
