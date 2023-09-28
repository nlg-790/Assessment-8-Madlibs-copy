### Conceptual Exercise

Answer the following questions below:

- What is React? When and why would you use it?

a popular front end framework made originally by facebook. it makes it easy to make reusable view components

- What is Babel?

a toolchain that emables the latest ECMAScript features

- What is JSX?

a syntax extension for Javascript often used with React. 

- How is a Component created in React?

They can have state and props for building complex features

- What are some difference between state and props?

props are immutable and use external data and are used for configuring child components. state is mutable and uses internal data and class components. 

- What does "downward data flow" refer to in React?

the undidirectional flow in a component hierarchy used in its internal architecture. 

- What is a controlled component?

a form element controlled by the state of a React component. 

- What is an uncontrolled component?

a form element not controlled by React state. 

- What is the purpose of the `key` prop when rendering a list of components?

it helps react identify and keep track of individual items within a list. 

- Why is using an array index a poor choice for a `key` prop when rendering a list of components?

they lack stability, dynamic lists have limited use, and can lead to performance issues. 

- Describe useEffect.  What use cases is it used for in React components?

a build in Reaction hook that allows you to perform side effects in functional components.used to manage asynchronous functions and interact with the dom. 

- What does useRef do?  Does a change to a ref value cause a rerender of a component?

creates mutable references to DOM elements or other values across renders without causing component to re render. 

- When would you use a ref? When wouldn't you use one?

Use accessing DOM elements, managing focus, and caching values. not use it when use state, controlled components and derived state. 

- What is a custom hook in React? When would you want to write one?
Follows specific naming convention to encapsulate and share stateful logic and side effects across multiple components. youll want to write it with reusable logic, complex state management, and abstracting side effects or organizing code. 