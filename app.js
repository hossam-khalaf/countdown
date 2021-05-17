const countdown = () => {
	const countDate = new Date('May 17 , 2027 10:25:00').getTime()

	const now = new Date().getTime()

	const gap = countDate - now

	// console.log(countDate, now, gap)

	const sec = 1000
	const min = sec * 60
	const hour = min * 60
	const day = hour * 24

	const textDay = Math.floor(gap / day)
	const textHour = Math.floor((gap % day) / hour)
	const textMinute = Math.floor((gap % hour) / min)
	const textSecond = Math.floor((gap % min) / sec)

	// inject to DOM
	document.querySelector('.day').innerText = textDay
	document.querySelector('.hour').innerText = textHour
	document.querySelector('.minute').innerText = textMinute
	document.querySelector('.second').innerText = textSecond

	// stop the countdown when it's near to done
	if (gap < 10000) {
		document.body.innerHTML = 'Yaay , we are happy to see you'
	}
}

try {
	setInterval(() => {
		countdown()
	}, 1000)
} catch (error) {
	console.error(error)
}
