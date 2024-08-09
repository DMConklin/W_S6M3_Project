import React, {useState, useEffect} from 'react'

export default function DateSetter(props) {
	const {currentYear,
			currentMonth,
			currentDay,
			year, 
			setYear, 
			month, 
			setMonth, 
			day, 
			setDay,
			setDate
		} = props

	const [daysInMonth, setDaysInMonth] = useState(new Date(year, month+1, 0).getDate())

	const years = []
	const months = year == currentYear ? Array.from(Array(currentMonth+1).keys()) : Array.from(Array(12).keys())
	const days = year == currentYear && month == currentMonth ? Array.from(Array(currentDay).keys()) : Array.from(Array(daysInMonth).keys())
	
	for (let i = currentYear; i >= 1995; i--) {
		years.push(i)
	}

	const handleYearChange = e => {
		setYear(Number(e.target.value))
	}

	const handleMonthChange = e => {
		setMonth(Number(e.target.value))
	}

	const handleDayChange = e => {
		setDay(Number(e.target.value))
	}

	const setDateHandler = () => {
		setDate(`${year}-${month.toString().length < 2 ? '0'+(month+1) : (month+1)}-${day.toString().length < 2 ? '0'+day : day}`)
	}

	useEffect(() => {
		setDaysInMonth(new Date(year, month, 0).getDate())
	}, [month,year])

	return (
		<div style={{textAlign: 'center'}}>
			<select name="year" id="year" defaultValue={currentYear} onChange={handleYearChange}>
				{years.map((year, idx) => {
					return <option key={idx} value={year}>{year}</option>
				})}
			</select>
			<select name="month" id="month" defaultValue={currentMonth} onChange={handleMonthChange}>
				{months.map((month, idx) => {
					return <option key={idx} value={month}>{month+1}</option>
				})}
			</select>
			<select name="day" id="day" defaultValue={currentDay} onChange={handleDayChange}>
				{days.map((day, idx) => {
					return <option key={idx} value={day+1}>{day+1}</option>
				})}
			</select>
			<button onClick={setDateHandler}>Get</button>
		</div>
	)
}