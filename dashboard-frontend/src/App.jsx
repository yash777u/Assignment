"use client";
import { useState } from 'react'
import './App.css'
import DashboardComponent from './Component/DashboardComponent';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

    <DashboardComponent />
    </>
  )
}

export default App
