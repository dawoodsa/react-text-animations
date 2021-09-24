'use strict';

var PropTypes = require('prop-types');
var React = require('react');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var PropTypes__default = /*#__PURE__*/_interopDefaultLegacy(PropTypes);
var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var e=[],t=[];function n(n,r){if(n&&"undefined"!=typeof document){var a,s=!0===r.prepend?"prepend":"append",d=!0===r.singleTag,i="string"==typeof r.container?document.querySelector(r.container):document.getElementsByTagName("head")[0];if(d){var u=e.indexOf(i);-1===u&&(u=e.push(i)-1,t[u]={}),a=t[u]&&t[u][s]?t[u][s]:t[u][s]=c();}else a=c();65279===n.charCodeAt(0)&&(n=n.substring(1)),a.styleSheet?a.styleSheet.cssText+=n:a.appendChild(document.createTextNode(n));}function c(){var e=document.createElement("style");if(e.setAttribute("type","text/css"),r.attributes)for(var t=Object.keys(r.attributes),n=0;n<t.length;n++)e.setAttribute(t[n],r.attributes[t[n]]);var a="prepend"===s?"afterbegin":"beforeend";return i.insertAdjacentElement(a,e),e}}

var css = "body {\n  font-size: 4rem;\n  box-sizing: border-box; }\n\n.words-wrapper {\n  display: inline-block;\n  position: relative;\n  text-align: left;\n  white-space: nowrap;\n  vertical-align: top; }\n  .words-wrapper .word {\n    display: inline-block;\n    position: absolute;\n    top: 0;\n    left: 0; }\n    .words-wrapper .word i, .words-wrapper .word em {\n      font-style: normal;\n      display: inline-block; }\n    .words-wrapper .word i {\n      backface-visibility: hidden; }\n  .words-wrapper .visible {\n    position: relative;\n    opacity: 1 !important; }\n\n.word-ani span {\n  opacity: 0; }\n\n.clip .words-wrapper {\n  overflow: hidden; }\n  .clip .words-wrapper .cursor {\n    width: 10px;\n    height: 100%;\n    position: absolute;\n    top: 0;\n    right: 0;\n    border-radius: 6px;\n    background-color: black; }\n\n.rotate1 {\n  --duration: 0;\n  --timingFunction:ease; }\n  .rotate1 .words-wrapper {\n    perspective: 300px; }\n    .rotate1 .words-wrapper span {\n      transform-origin: 50% 100%; }\n    .rotate1 .words-wrapper .visible {\n      animation: rotate-1-in var(--duration) var(--timingFunction); }\n    .rotate1 .words-wrapper .hidden {\n      animation: rotate-1-out var(--duration) var(--timingFunction); }\n\n@keyframes rotate-1-in {\n  0% {\n    transform: rotateX(180deg);\n    opacity: 0; }\n  35% {\n    transform: rotateX(120deg);\n    opacity: 0; }\n  65% {\n    opacity: 0; }\n  100% {\n    transform: rotateX(360deg);\n    opacity: 1; } }\n\n@keyframes rotate-1-out {\n  0% {\n    transform: rotateX(0deg);\n    opacity: 1; }\n  35% {\n    transform: rotateX(-40deg);\n    opacity: 1; }\n  65% {\n    opacity: 0; }\n  100% {\n    transform: rotateX(180deg);\n    opacity: 0; } }\n\n.rotate2 {\n  --duration:0s;\n  --timingFunction:forwards; }\n  .rotate2 .words-wrapper {\n    perspective: 300px; }\n  .rotate2 i {\n    transform-style: preserve-3d;\n    transform: translateZ(-20px) rotateX(-90deg); }\n    .rotate2 i.in {\n      animation: rotate-2-in var(--duration) var(--timingFunction); }\n    .rotate2 i.out {\n      animation: rotate-2-out var(--duration) var(--timingFunction); }\n\n@keyframes rotate-2-in {\n  0% {\n    opacity: 0;\n    transform: translateZ(-20px) rotateX(90deg); }\n  60% {\n    opacity: 1;\n    transform: translateZ(-20px) rotateX(-10deg); }\n  100% {\n    opacity: 1;\n    transform: translateZ(-20px) rotateX(0deg); } }\n\n@keyframes rotate-2-out {\n  0% {\n    opacity: 1;\n    transform: translateZ(-20px) rotateX(0); }\n  60% {\n    opacity: 0;\n    transform: translateZ(-20px) rotateX(-100deg); }\n  100% {\n    opacity: 0;\n    transform: translateZ(-20px) rotateX(-90deg); } }\n\n.rotate3 {\n  --duration:0s;\n  --timingFunction:forwards; }\n  .rotate3 .words-wrapper {\n    perspective: 300px; }\n  .rotate3 i {\n    transform: rotateY(180deg); }\n    .rotate3 i.in {\n      animation: rotate-3-in var(--duration) var(--timingFunction); }\n    .rotate3 i.out {\n      animation: rotate-3-out var(--duration) var(--timingFunction); }\n\n@keyframes rotate-3-in {\n  0% {\n    transform: rotateY(180deg); }\n  100% {\n    transform: rotateY(0deg); } }\n\n@keyframes rotate-3-out {\n  0% {\n    transform: rotateY(0); }\n  100% {\n    transform: rotateY(-180deg); } }\n\n.slide {\n  --duration:0;\n  --timingFunction:ease; }\n  .slide .words-wrapper {\n    overflow: hidden; }\n    .slide .words-wrapper .visible {\n      animation: slide-in var(--duration) var(--timingFunction); }\n    .slide .words-wrapper .hidden {\n      animation: slide-out var(--duration) var(--timingFunction); }\n\n@keyframes slide-in {\n  0% {\n    opacity: 0;\n    transform: translateY(-100%); }\n  60% {\n    opacity: 1;\n    transform: translateY(20%); }\n  100% {\n    opacity: 1;\n    transform: translateY(0); } }\n\n@keyframes slide-out {\n  0% {\n    opacity: 1;\n    transform: translateY(0); }\n  60% {\n    opacity: 0;\n    transform: translateY(120%); }\n  100% {\n    opacity: 0;\n    transform: translateY(100%); } }\n\n.zoom {\n  --duration:0;\n  --timingFunction:ease; }\n  .zoom .words-wrapper {\n    perspective: 300px; }\n    .zoom .words-wrapper .visible {\n      animation: zoom-in var(--duration) var(--timingFunction); }\n    .zoom .words-wrapper .hidden {\n      animation: zoom-out var(--duration) var(--timingFunction); }\n\n@keyframes zoom-in {\n  from {\n    opacity: 0;\n    transform: translateZ(100px); }\n  to {\n    opacity: 1;\n    transform: translateZ(0); } }\n\n@keyframes zoom-out {\n  from {\n    opacity: 1;\n    transform: translateZ(0); }\n  to {\n    opacity: 0;\n    transform: translateZ(100px); } }\n\n.push {\n  --duration: 0;\n  --timingFunction:ease; }\n  .push .visible {\n    animation: push-in var(--duration) var(--timingFunction); }\n  .push .hidden {\n    animation: push-out var(--duration) var(--timingFunction); }\n\n@keyframes push-in {\n  0% {\n    opacity: 0;\n    transform: translateX(-100%); }\n  60% {\n    opacity: 1;\n    transform: translateX(10%); }\n  100% {\n    opacity: 1;\n    transform: translateX(0%); } }\n\n@keyframes push-out {\n  0% {\n    opacity: 1;\n    transform: translateX(0); }\n  60% {\n    opacity: 0;\n    transform: translateX(110%); }\n  100% {\n    opacity: 0;\n    transform: translateX(100%); } }\n\n.scale {\n  --duration:0s;\n  --timingFunction:forwards; }\n  .scale i {\n    transform: scale(0); }\n    .scale i.in {\n      animation: scale-up var(--duration) var(--timingFunction); }\n    .scale i.out {\n      animation: scale-down var(--duration) var(--timingFunction); }\n\n@keyframes scale-up {\n  0% {\n    transform: scale(0);\n    opacity: 0; }\n  60% {\n    transform: scale(1.2);\n    opacity: 1; }\n  100% {\n    transform: scale(1);\n    opacity: 1; } }\n\n@keyframes scale-down {\n  0% {\n    transform: scale(1);\n    opacity: 1; }\n  60% {\n    transform: scale(0);\n    opacity: 0; } }\n";
n(css,{});

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function BoilerPlate(_ref) {
  var cname = _ref.cname,
      id = _ref.id,
      name = _ref.name,
      target = _ref.target,
      sentence = _ref.sentence,
      children = _ref.children;
  var section = sentence.split(target);
  return /*#__PURE__*/React__default["default"].createElement("div", {
    className: cname,
    id: id
  }, /*#__PURE__*/React__default["default"].createElement("span", null, section[0]), /*#__PURE__*/React__default["default"].createElement("span", {
    className: name
  }, children), /*#__PURE__*/React__default["default"].createElement("span", null, section[1]));
}

function Clip(_ref) {
  var id = _ref.id,
      cname = _ref.cname,
      target = _ref.target,
      alternatingText = _ref.alternatingText,
      animation = _ref.animation,
      children = _ref.children;
  var delay = animation.delay,
      duration = animation.duration,
      timingFunction = animation.timingFunction;

  var _useState = React.useState(alternatingText[0]),
      _useState2 = _slicedToArray(_useState, 2),
      currentWord = _useState2[0],
      setCurrentWord = _useState2[1];

  var _useState3 = React.useState(),
      _useState4 = _slicedToArray(_useState3, 2),
      wrapperWidth = _useState4[0],
      setWrapperWidth = _useState4[1];

  var word = React.useRef(null);
  var cursor = React.useRef(null);
  React.useEffect(function () {
    if (isClipped()) {
      setTimeout(updateWord, duration);
    } else {
      setTimeout(minimizeWidth, delay);
    }
  }, [wrapperWidth]);
  React.useEffect(function () {
    maximizeWidth();
  }, [currentWord]);

  var isClipped = function isClipped() {
    return wrapperWidth == cursor.current.offsetWidth ? true : false;
  };

  var maximizeWidth = function maximizeWidth() {
    setWrapperWidth(word.current.offsetWidth + 15);
  };

  var minimizeWidth = function minimizeWidth() {
    setWrapperWidth(cursor.current.offsetWidth);
  };

  var isLastWord = function isLastWord(i) {
    return i == alternatingText.length - 1 ? true : false;
  };

  var updateWord = function updateWord() {
    var curIndex = alternatingText.indexOf(currentWord);

    if (isLastWord(curIndex)) {
      setCurrentWord(alternatingText[0]);
    } else {
      setCurrentWord(alternatingText[curIndex + 1]);
    }
  };

  var wrapperStyle = {
    width: wrapperWidth,
    transition: "all ".concat(duration, "ms ").concat(timingFunction)
  };
  return /*#__PURE__*/React__default["default"].createElement(BoilerPlate, {
    name: "clip",
    target: target,
    sentence: children,
    id: id,
    cname: cname
  }, /*#__PURE__*/React__default["default"].createElement("span", {
    className: "words-wrapper",
    style: wrapperStyle
  }, /*#__PURE__*/React__default["default"].createElement("span", {
    ref: word
  }, /*#__PURE__*/React__default["default"].createElement("span", {
    className: "word visible"
  }, currentWord), /*#__PURE__*/React__default["default"].createElement("span", {
    className: "cursor",
    ref: cursor
  }))));
}

Clip.propTypes = {
  target: PropTypes__default["default"].string.isRequired,
  alternatingText: PropTypes__default["default"].array.isRequired
};
Clip.defaultProps = {
  id: '',
  cname: 'text-animation-clip',
  animation: {
    delay: 2500,
    duration: 1000,
    timingFunction: 'ease'
  }
};

/* eslint-disable */

function SetAnimationProperties(_ref) {
  var animationProps = _ref.animationProps,
      type = _ref.type,
      children = _ref.children;
  var delay = animationProps.delay,
      duration = animationProps.duration,
      timingFunction = animationProps.timingFunction;
  var wordWrapper = React.useRef(null);
  React.useEffect(function () {
    setTimeout(function () {
      wordWrapper.current.style.setProperty('--duration', duration + 'ms');
      wordWrapper.current.style.setProperty('--timingFunction', timingFunction);
    }, delay);
  }, []);
  return /*#__PURE__*/React__default["default"].createElement("span", {
    className: "words-wrapper ".concat(type),
    ref: wordWrapper
  }, children);
}

function WordAnimation(_ref) {
  var name = _ref.name,
      id = _ref.id,
      cname = _ref.cname,
      target = _ref.target,
      alternatingText = _ref.alternatingText,
      animation = _ref.animation,
      children = _ref.children;

  var InitWordState = function InitWordState(index) {
    return alternatingText.map(function (_, i) {
      return i == index ? 'visible' : 'hidden';
    });
  };

  var _useState = React.useState(InitWordState(0)),
      _useState2 = _slicedToArray(_useState, 2),
      wordState = _useState2[0],
      setWordState = _useState2[1];

  React.useEffect(function () {
    setTimeout(playNext, animation.delay);
  }, [wordState]);

  var lastIndex = function lastIndex(i) {
    return i == wordState.length - 1 ? true : false;
  };

  var getNextIndex = function getNextIndex(i) {
    return lastIndex(i) ? 0 : i + 1;
  };

  var playNext = function playNext() {
    var nextIndex = getNextIndex(wordState.indexOf('visible'));
    setWordState(InitWordState(nextIndex));
  };

  return /*#__PURE__*/React__default["default"].createElement(BoilerPlate, {
    name: name,
    target: target,
    sentence: children,
    id: id,
    cname: cname
  }, /*#__PURE__*/React__default["default"].createElement(SetAnimationProperties, {
    animationProps: animation,
    type: "word-ani"
  }, alternatingText.map(function (word, i) {
    return /*#__PURE__*/React__default["default"].createElement("span", {
      className: "word ".concat(wordState[i]),
      key: i
    }, word);
  })));
}

/* eslint-disable */

function Rotate1(props) {
  props = Object.assign({
    name: 'rotate1'
  }, props);
  return /*#__PURE__*/React__default["default"].createElement(WordAnimation, props);
}

Rotate1.propTypes = {
  target: PropTypes__default["default"].string.isRequired,
  alternatingText: PropTypes__default["default"].array.isRequired
};
Rotate1.defaultProps = {
  id: '',
  cname: 'text-animation-rotate1',
  animation: {
    delay: 2500,
    duration: 1000,
    timingFunction: 'ease'
  }
};

/* eslint-disable */

function Slide(props) {
  props = Object.assign({
    name: 'slide'
  }, props);
  return /*#__PURE__*/React__default["default"].createElement(WordAnimation, props);
}

Slide.propTypes = {
  target: PropTypes__default["default"].string.isRequired,
  alternatingText: PropTypes__default["default"].array.isRequired
};
Slide.defaultProps = {
  id: '',
  cname: 'text-animation-slide',
  animation: {
    delay: 2500,
    duration: 2000,
    timingFunction: 'ease'
  }
};

/* eslint-disable */

function Zoom(props) {
  props = Object.assign({
    name: 'zoom'
  }, props);
  return /*#__PURE__*/React__default["default"].createElement(WordAnimation, props);
}

Zoom.propTypes = {
  target: PropTypes__default["default"].string.isRequired,
  alternatingText: PropTypes__default["default"].array.isRequired
};
Zoom.defaultProps = {
  id: '',
  cname: 'text-animation-zoom',
  animation: {
    delay: 2500,
    duration: 800,
    timingFunction: 'linear'
  }
};

/* eslint-disable */

function Push(props) {
  props = Object.assign({
    name: 'push'
  }, props);
  return /*#__PURE__*/React__default["default"].createElement(WordAnimation, props);
}

Push.propTypes = {
  target: PropTypes__default["default"].string.isRequired,
  alternatingText: PropTypes__default["default"].array.isRequired
};
Push.defaultProps = {
  id: '',
  cname: 'text-animation-Push',
  animation: {
    delay: 2500,
    duration: 600,
    timingFunction: 'ease'
  }
};

function LetterAnimation(_ref) {
  var name = _ref.name,
      id = _ref.id,
      cname = _ref.cname,
      target = _ref.target,
      alternatingText = _ref.alternatingText,
      animation = _ref.animation,
      children = _ref.children;
  var delay = animation.delay;
  var letterDelay = animation.duration / alternatingText.length;

  var _useState = React.useState(0),
      _useState2 = _slicedToArray(_useState, 2),
      wordIndex = _useState2[0],
      setWordIndex = _useState2[1];

  var _useState3 = React.useState(0),
      _useState4 = _slicedToArray(_useState3, 2),
      opacity = _useState4[0],
      setOpacity = _useState4[1];

  var _useState5 = React.useState(function () {
    return alternatingText.map(function (word, i) {
      return word.split('').map(function () {
        return i == 0 ? 'in' : 'out';
      });
    });
  }),
      _useState6 = _slicedToArray(_useState5, 2),
      letterState = _useState6[0],
      setLetterState = _useState6[1];

  React.useEffect(function () {
    setTimeout(setOpacity(1), delay);
    setTimeout(play, delay);
    setTimeout(incrementIndex, delay);
  }, [wordIndex]);

  var setNextLetter = function setNextLetter(word, letter, type) {
    var newLetterState = letterState.concat();
    newLetterState[word][letter] = type;
    setLetterState(newLetterState);
  };

  var animateWord = function animateWord(type, index) {
    var lettersLength = letterState[index].length;
    var i = 0;
    var animateLetter = setInterval(function () {
      setNextLetter(index, i, type);
      i++;
      if (i == lettersLength) clearInterval(animateLetter);
    }, letterDelay);
  };

  var nextIndex = function nextIndex() {
    return wordIndex == letterState.length - 1 ? 0 : wordIndex + 1;
  };

  var incrementIndex = function incrementIndex() {
    setWordIndex(nextIndex());
  };

  var play = function play() {
    animateWord('out', wordIndex);
    animateWord('in', nextIndex());
  };

  return /*#__PURE__*/React__default["default"].createElement(BoilerPlate, {
    name: name,
    id: id,
    cname: cname,
    target: target,
    sentence: children
  }, /*#__PURE__*/React__default["default"].createElement(SetAnimationProperties, {
    animationProps: animation,
    type: "letter-ani"
  }, alternatingText.map(function (word, wordIndex) {
    return /*#__PURE__*/React__default["default"].createElement("span", {
      style: {
        opacity: opacity
      },
      className: "word",
      key: wordIndex
    }, word.split('').map(function (letter, letterIndex) {
      return /*#__PURE__*/React__default["default"].createElement("i", {
        className: letterState[wordIndex][letterIndex],
        key: letterIndex
      }, /*#__PURE__*/React__default["default"].createElement("em", null, letter));
    }));
  })));
}

function Rotate2(props) {
  props = Object.assign({
    name: 'rotate2'
  }, props);
  return /*#__PURE__*/React__default["default"].createElement(LetterAnimation, props);
}

Rotate2.propTypes = {
  target: PropTypes__default["default"].string.isRequired,
  alternatingText: PropTypes__default["default"].array.isRequired
};
Rotate2.defaultProps = {
  id: '',
  cname: 'text-animation-Rotate2',
  animation: {
    delay: 2000,
    duration: 400,
    timingFunction: 'forwards'
  }
};

function Rotate3(props) {
  props = Object.assign({
    name: 'rotate3'
  }, props);
  return /*#__PURE__*/React__default["default"].createElement(LetterAnimation, props);
}

Rotate3.propTypes = {
  target: PropTypes__default["default"].string.isRequired,
  alternatingText: PropTypes__default["default"].array.isRequired
};
Rotate3.defaultProps = {
  id: '',
  cname: 'text-animation-Rotate3',
  animation: {
    delay: 2000,
    duration: 400,
    timingFunction: 'forwards'
  }
};

function Scale(props) {
  props = Object.assign({
    name: 'scale'
  }, props);
  return /*#__PURE__*/React__default["default"].createElement(LetterAnimation, props);
}

Scale.propTypes = {
  target: PropTypes__default["default"].string.isRequired,
  alternatingText: PropTypes__default["default"].array.isRequired
};
Scale.defaultProps = {
  id: '',
  cname: 'text-animation-Scale',
  animation: {
    delay: 2000,
    duration: 400,
    timingFunction: 'forwards'
  }
};

var TextAnimation = {
  Clip: Clip,
  Slide: Slide,
  Zoom: Zoom,
  Push: Push,
  Rotate1: Rotate1,
  Rotate2: Rotate2,
  Rotate3: Rotate3,
  Scale: Scale
};

module.exports = TextAnimation;
