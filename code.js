
function setTime() {
	let date = new Date()
	
	let year = date.getFullYear()
	let month = date.getMonth()
	month = month + 1
	let day = date.getDate()
	let dayName = date.getDay()
	
	let hour = date.getHours()
	let min = date.getMinutes()
	let sec = date.getSeconds()

	let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
	
	if(month <= 9) {
		month = '0' + month
	}
	
	if(day <= 9) {
		day = '0' + day
	}
	
	if(hour <= 9) {
		hour = '0' + hour
	}
	
	if(min <= 9) {
		min = '0' + min
	}
	
	if(sec <= 9) {
		sec = '0' + sec
	}

	document.getElementById('dateRow').innerHTML = `${year}-${month}-${day} ${days[dayName]}`
	document.getElementById('timeRow').innerHTML = `${hour}:${min}:${sec}`
	
}

setTime()
setInterval(setTime, 1000)