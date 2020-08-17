import Address from './Address'
export default class Store extends Address {
  depot: {
    address?: Address
    displacement?: number
  }

  constructor(lat: number, long: number, name: string, depots: Address[]) {
    super(lat, long, name)

    this.depot = depots.reduce(
      (data, depot) => {
        const displacement = depot.distance(this)

        if (displacement < data.displacement) data = { address: depot, displacement }
        return data
      },
      { address: depots[0], displacement: Number.MAX_SAFE_INTEGER }
    )
  }
}
