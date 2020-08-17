export default class Address {
  lat: number
  long: number
  name: string

  constructor(lat: number, long: number, name: string) {
    this.lat = lat
    this.long = long
    this.name = name
  }

  distance(point: Address): number {
    let R = 6378137 // Earth’s mean radius in meter
    let dLat = rad(point.lat - this.lat)
    let dLong = rad(point.long - this.long)
    let a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(rad(this.lat)) * Math.cos(rad(point.lat)) * Math.sin(dLong / 2) * Math.sin(dLong / 2)
    let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
    let d = R * c
    return d // returns the distance in Km
  }
}

function rad(x) {
  return (x * Math.PI) / 180
}
