# JmsrChipList (React version)

`jmsr-chiplist-react` is a basic React component that renders a list of keywords. It allows
Bulma framework mode and custom styles with CSS modules.

![ChipList display](https://meaningfulgadgets.com/jmsr/img/code-assets/chiplist/screenshot.jpg "ChipList display")

## Demo

[Demo at CodeSandbox](https://codesandbox.io)

## Installation

```
npm install --save jmsr-chiplist-react
```

## How to use

### General styles (CSS frameworks)

1. Define your styles/framework classes:
```css
{
  .is-bright { color: black; background: white; }
  .is-dark { color: white; background: black; }
  .gray-border { border: 2px solid gray; }
}
```

2. Declare the names and use them in your chiplist:
```jsx
import JmsrChipList from 'jmsr-chiplist-react'

const momentChips = [
  { content: 'Morning',       type: 'dayLight' },
  { content: 'Afternoon',     type: 'sunset'   },
  { content: 'Night',         type: 'obscure'  },
  { content: 'Early morning', type: 'obscure'  }
]

const ambientTypes = {
  dayLight: 'is-bright',
  sunset:   'is-bright gray-border',
  obscure:  'is-dark'
}

const AmbientChipList = () => (
  <JmsrChipList chips={momentChips} customTypes={ambientTypes} />
)
```

### Component specific style (CSS Modules)

```jsx
import JmsrChipList from 'jmsr-chiplist-react'
import JmsrChipListStyles from 'jmsr-chiplist-react/src/JmsrChipList.scss'

const ambientTypes = {
  dayLight: { color: black, background: white },
  sunset:   { ... },
  obscure:  { ... }
}

const AmbientChipList = () => (
  <JmsrChipList
    chips={momentChips}
    customTypes={ambientTypes} />
)
```

### Props specification

| Attribute   |    Type     |  Default  | Description                                                                                              |
| :--------   | :--------:  | :-------: | :------------------------------------------------------------------------------------------------------- |
| chips       | `object[]` |  `[]`    | Array of objects with each chip `content` (`string|jsx`) and `type` (`string`)                    |
| customTypes | `object`   |  `{}`    | Object that defines each custom chip type. It could be a className string or a css module spec           |

## Author

#### Johan Manuel Serrato Romero

- [Website](https://meaningfulgadgets.com/jmsr)

## License

MIT. Copyright (c) 2021 Johan Serrato.