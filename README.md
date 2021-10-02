# react-text-animations
A variety of text animations ready to be applied.


![alt-text](https://github.com/dawoodsa/react-text-animations/blob/master/example.gif)

## Installation
`npm i react-text-animations`

## Basic Usage
```javascript

import TextAnimation from "react-text-animations";

const AnimatedText = () => {
    return (
        <TextAnimation.Slide target="Merciful" text={['Gracious', 'Peace', 'Knowing']}>
            Allah is The Merciful
        </TextAnimation.Slide>
    )
}

export default AnimatedText;
```

You can choose from a bunch of animations by typing `TextAnimation.animationName`, In the example above we used the **Slide** animation. Below is a list of the animations that can be used.



## Animations List

Animations are separated to **2 types** :

1. Word
    * Push
    * Flip
    * Clip
    * Slide
    * Zoom
    
2. Letter
    * Rotate1 
    * Rotate2 
    * Scale
    
*Please feel free to suggest better names*



## Properties

For more flexibility, you can play with the **animation properties**, these properties are called from the animation prop. `<TextAnimation.Slide animation={{delay:1000}}>`

| Prop  | Description |
| ------------- | ------------- |
| delay  | how long to wait between transitions in millisecond  |
| duration  | how long a transition will take in millisecond  |
| timingFunction | how the animation progresses through the animation **e.g(ease-in)**|
| cname | use this className to add your custom styling |
| id | adding an *id* is also recommended for multiple text animations in a page. |


```javascript

<TextAnimation.Slide 
    target="Merciful" 
    text={['Gracious', 'Peace', 'Knowing']} 
    cname="textAnimation"
    id="textAnimation__slide"
    animation={{
        duration:1000,
        delay:2000,
        timingFunction:'ease-out'
    }}
>
    Allah is The Merciful
</TextAnimation.Slide>

```
