import { Address, Store, Customer } from './modules'
import { hoursToMinSec } from 'time-pocket'

const SPEED = 60
interface PathResponse {
  time: string
  store: string
  depot: string
}

const depots = [
  new Address(51.2348, 6.825636, 'Metrostrasse 12, 40235 Düsseldorf'),
  new Address(51.241394, 6.830576, 'Ludenberger Str. 1, 40629 Düsseldorf'),
]

const stores = [
  new Store(51.240203, 6.719015, 'Willstätterstraße 24, 40549 Düsseldorf', depots),
  new Store(51.210961, 6.77447, 'Bilker Allee 128, 40217 Düsseldorf', depots),
  new Store(51.203763, 6.721216, 'Hammer Landstraße 113, 41460 Neuss', depots),
  new Store(51.225542, 6.690605, 'Gladbacher Str. 471, 41460 Neuss', depots),
  new Store(51.296001, 6.8299, 'Lise-Meitner-Straße 1, 40878 Ratingen', depots),
]

const customers = [
  new Customer(51.208474, 6.774582, 'Friedrichstraße 133, 40217 Düsseldorf', stores),
  new Customer(51.236792, 6.777092, 'Fischerstraße 23, 40477 Düsseldorf', stores),
  new Customer(51.227741, 6.759949, 'Wildenbruchstraße 2, 40545 Düsseldorf', stores),
  new Customer(51.207048, 6.832643, 'Reisholzer Str. 48, 40231 Düsseldorf', stores),
]

function getPath(cust: Customer): PathResponse {
  const totalDistance = (cust.store.displacement + cust.store.address.depot.displacement) / 1000

  return {
    time: hoursToMinSec(totalDistance / SPEED, { txt: true }).txt,
    store: cust.store.address.name,
    depot: cust.store.address.depot.address.name,
  }
}

customers.forEach(customer => console.log(getPath(customer)))
