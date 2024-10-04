
import './App.css'
import Card from './components/Card'

function App() {
  const myObj = {
    username: "Suraj",
    age: 21
  };
  
  let myArr = [1, 2, 3];

return (
<>
  
  <Card name="Abhishek" slogan="Boooom" btnText="Buy now!" someObj={myObj} someArr={myArr} /*someObj={{myArr, myObj}} */ />
  <Card name="Suraj" slogan="Firreeee" btnText='Try now!'/> 

</>
)
}

export default App
