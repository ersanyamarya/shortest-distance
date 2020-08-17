# Find shortest distance

[![Codacy Badge](https://img.shields.io/codacy/grade/6cec45f5a8634ea4878e490e05c34a32/master?logo=codacy&style=for-the-badge)](https://app.codacy.com/manual/ersanyamarya/shortest-distance?utm_source=github.com&utm_medium=referral&utm_content=ersanyamarya/shortest-distance&utm_campaign=Badge_Grade_Dashboard)
![GitHub repo size](https://img.shields.io/github/repo-size/ersanyamarya/shortest-distance?logo=github&style=for-the-badge)

![GitHub Workflow Status](https://img.shields.io/github/workflow/status/ersanyamarya/shortest-distance/Integrate?label=Integrate&logo=github&style=for-the-badge)

![GitHub](https://img.shields.io/github/license/ersanyamarya/shortest-distance?style=for-the-badge)

## Features

- NodeJS
- TypeScript

> CI with github actions

---

## Problem Statement

There is a fleet of drones in two locations available:

* Metrostrasse 12, 40235 Düsseldorf
* Ludenberger Str. 1, 40629 Düsseldorf

Currently four test customers participate

* C1 : Friedrichstraße 133, 40217 Düsseldorf
* C2 : Fischerstraße 23, 40477 Düsseldorf
* C3 : Wildenbruchstraße 2, 40545 Düsseldorf
* C4 : Reisholzer Str. 48, 40231 Düsseldorf

Delivery service can supply goods out of these following locations:

* Willstätterstraße 24, 40549 Düsseldorf
* Bilker Allee 128, 40217 Düsseldorf
* Hammer Landstraße 113, 41460 Neuss
* Gladbacher Str. 471, 41460 Neuss
* Lise-Meitner-Straße 1, 40878 Ratingen

The process of delivery works like this:
- The orders are pre-picked and can be picked up without delay from
the stores above
- The drone will always begin from one of the two drone depots
mentioned above
- After picking up the goods the drone will fly to the customers in the
shortest distance

Develop highly re-usable Software that will calculate the fastest delivery from depot to store to customer.

Your software should tell which depot and store shall be chosen for a given customer and calculate the total delivery time in minutes and
seconds.

Assumtions: 

* You can pre- calculate the GPS coordinates and use
these in your software.

* The drone has a velocity of 60 km/h. No time for pick-up and hand-
over is required.



