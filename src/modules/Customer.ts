import Address from './Address'
import Store from './Store'
export default class Customer extends Address {
  store: {
    address?: Store
    displacement?: number
  }

  constructor(lat: number, long: number, name: string, stores: Store[]) {
    super(lat, long, name)

    this.store = stores.reduce(
      (data, store) => {
        const displacement = store.distance(this)

        if (displacement < data.displacement) data = { address: store, displacement }
        return data
      },
      { address: stores[0], displacement: Number.MAX_SAFE_INTEGER }
    )
  }
}
