import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TimeCard from './TimeCard'
import UserCard from './UserCard'


function App() {
  const [count, setCount] = useState(0)

  return (

<div style={{backgroundColor:"#0d1323"}}>
<div className='pt-5 col-12-sm'>

<div className="row p-5">

<div className='col'>
  
  <UserCard />

</div>

<div className='col'>

  <TimeCard actividad="Work" horas="32hrs" lw="Last Week - 36hrs" imagen="./img/icon-work.svg" fondo="#ff8b64"/>

  <br />

  <TimeCard actividad="Exercise" horas="4hrs" lw="Last Week - 5hrs" imagen="./img/icon-exercise.svg" fondo="#4bcf83"/>
  
</div>

<div className='col'>
  
  <TimeCard actividad="Play" horas="10hrs" lw="Last Week - 8hrs" imagen="./img/icon-play.svg" fondo="#56c2e6"/>

  <br />

  <TimeCard actividad="Social" horas="5hrs" lw="Last Week - 10hrs" imagen="./img/icon-social.svg" fondo="#7235d1"/>
  
</div>

<div className='col'>
  
  <TimeCard actividad="Study" horas="4hrs" lw="Last Week - 7hrs" imagen="./img/icon-study.svg" fondo="#ff5e7d"/>

  <br />

  <TimeCard actividad="Self Care" horas="2hrs" lw="Last Week - 2hrs" imagen="./img/icon-self-care.svg" fondo="#f1c75b"/>
  
</div>

</div>

</div>
    </div>
  
  )
}

export default App
