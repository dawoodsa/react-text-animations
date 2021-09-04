import React from 'react';
import ReactDOM from 'react-dom';
import TextAnimation from './text-animation/TextAnimation'
import './text-animation/styles/main.scss';
ReactDOM.render(
  <React.StrictMode>
    {/* <TextAnimation.Clip
      id="clip-animation-1"
      target="cute"
      alternatingText={["cute hadeel", "lazy love", "geniuses"]}
      animation={{ delay: 3000, duration: 1000, timingFunction: 'ease' }}

    >Programmers are cute</TextAnimation.Clip> */}

    {/* <TextAnimation.Clip
      target="cute"
      alternatingText={["d ", "a", "d"]}
    >Programmers are cute</TextAnimation.Clip> */}

    <TextAnimation.Rotate1
      target="cute"
      alternatingText={["dete", "love", "cute"]}
    >Programmers are cute</TextAnimation.Rotate1>
  </React.StrictMode>,
  document.getElementById('root')
);
