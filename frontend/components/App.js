import React, {useState, useEffect} from 'react'
import axois from "axios"

function App() {
  const [data, setData] = useState()
  const [year, setYear] = useState(new Date().getFullYear())
  const [month, setMonth] = useState(new Date().getMonth()+1)
  const [day, setDay] = useState(new Date().getDate())
  const [date, setDate] = useState(`${year}-${month}-${day}`)

  const BASE_URL = "https://api.nasa.gov/planetary/apod"
  const API_KEY = "DEMO_KEY"

  console.log(data)

  useEffect(() => {
    axois.get(`${BASE_URL}?api_key=${API_KEY}&date=${date}`)
      .then(res => setData(res.data))
      .catch(err => console.log(err))
  },[date])

  return (
    <p>
      Read through the instructions in the README.md file to build your NASA
      app! Have fun <span role="img" aria-label='go!'>🚀</span>!
    </p>
  )
}

export default App
