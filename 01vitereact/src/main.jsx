import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'


function MyApp(){
  return(
  <>
    <h1>Custom App</h1>
    <h2>Hello</h2>
  </>
  );
}

// const reactElement = {
//   type: 'a',
//   props: {
//       href: 'https://google.com',
//       target: '_blank'
//   },
//   children: 'Click me to visit Google'
// }

const anotherUser = 'Chai Aur React';

const reactElement = React.createElement(
  'a',
  {href: 'https://google.com', target: '_blank'},
  'Click me to visit Google!! ',
  anotherUser
);


function TestElement(){
  return(
    <a href='https://google.com' target='_blank'>Click me to Visit Google! </a>
  );
}

const anotherElement = (
  <a href='https://google.com' target='_blank'>Visit Google!!!</a>
);

ReactDOM.createRoot(document.getElementById('root')).render(
<>
    <App />
    <MyApp />
    <TestElement />
    {reactElement}
    {anotherElement}
</>
);

export default MyApp;




