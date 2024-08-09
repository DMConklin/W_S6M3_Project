import React, {useState, useEffect} from 'react'
import axois from "axios"
import DateSetter from './DateSetter'
import Media from './Media'

function App() {
  const currentYear = new Date().getFullYear()
  const currentMonth = new Date().getMonth()
  const currentDay = new Date().getDate()
  const [data, setData] = useState()
  const [year, setYear] = useState(currentYear)
  const [month, setMonth] = useState(currentMonth)
  const [day, setDay] = useState(currentDay)
  const [date, setDate] = useState(`${year}-${month.toString().length < 2 ? '0'+(month+1) : (month+1)}-${day.toString().length < 2 ? '0'+day : day}`)

  const BASE_URL = "https://api.nasa.gov/planetary/apod"
  const API_KEY = "DEMO_KEY"

  useEffect(() => {
    axois.get(`${BASE_URL}?api_key=${API_KEY}&date=${date}`)
      .then(res => setData(res.data))
      .catch(err => console.log(err))
  },[date])

  console.log(data)

  return (
    <div>
      <DateSetter 
        year={year}
        month={month}
        day={day}
        currentYear={currentYear}
        currentMonth={currentMonth}
        currentDay={currentDay}
        setYear={setYear}
        setMonth={setMonth}
        setDay={setDay}
        setDate={setDate} />
      <Media data={data} />
    </div>
  )
}

export default App
