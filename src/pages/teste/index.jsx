import { useState } from 'react';

// Como alterar o estado de uma const do elemento pai no elemento filho react

export function Teste() {
  const [data, setData] = useState([{day: 'sabado', value:28}, {day:'domingo', value:30}])

  function update(newState) {
    setData([{day: newState, value:28}, {day:'domingo', value:30}])
  }

  return (
    <div>
      <h1>Teste</h1>
      <div>
        <Input data={data} update={update}/>
        <Show data={data}/>
      </div>
    </div>
  )
}

function Input(props) {
  function updateFilho(e) {
    props.update(e.target.value)
  }
  
  return (
    <input type="text" placeholder='Testando' onChange={updateFilho} />
  )
}

function Show(props) {
  const dados = props.data

  return (
    <div>
      <h1>{dados[0].day}</h1>
    </div>
  )
}