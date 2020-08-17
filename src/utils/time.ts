interface HoursToMinSecResponse {
  minutes: number
  seconds: number
  txt: string
}

const hoursToMinSec = (time: number): HoursToMinSecResponse => {
  const minutes = time * 60
  const seconds = (minutes % 1) * 60

  return {
    minutes,
    seconds,
    txt: `${Math.floor(minutes)} min ${Math.round(seconds)} sec`,
  }
}

export { hoursToMinSec }
