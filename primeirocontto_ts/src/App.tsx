import './App.css'
import Input from './components/Input';
import Card from './components/Card';
import { useState } from 'react';
import Button from './components/Button';

interface User{
  name:string 
  age:number
  hobby:string 
}

function App() {
  const [users, setUsers] = useState<User[]>([] as User[])
  const [name, setName] = useState<string>('')
  const [age, setAge] = useState<number>(0)
  const [hobby, setHobby] = useState<string>('')

  const handleSubmit = (name:string,age:number,hobby:string) => {
    const person = {name,age,hobby}
    setUsers([...users,person])
  }
  return (
    <div className="App">
      <header className="App-header">
        <Input placeholder="Seu nome" label="Nome" onChange={(e)=>setName(e.target.value)} />
        <Input placeholder="Sua idade" label="Idade" type="number" onChange={(e)=>setAge(Number(e.target.value))}/>
        <Input placeholder="Seu hobby" label="Hobby" onChange={(e)=>setHobby(e.target.value)} />
        
        <Button onClick={()=>handleSubmit(name,age,hobby)}>Enviar</Button>

          {users.map(person=>(
              <Card name={person.name} age={person.age} hobby={person.hobby}/>
          ))}
      </header>
    </div>
  );
}

export default App;
