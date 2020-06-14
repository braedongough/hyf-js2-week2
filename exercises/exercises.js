function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

function generateListings(numberOfListings) {
  const listings = []

  const listingType = ['House', 'Apartment', 'Shed', 'Dorm', 'Farm']
  const listingFacilities = ['parking', 'Elevator', 'Altan', 'Have', 'Husdyr']

  for (let i = 0; i < numberOfListings; i++) {
    const listing = {}
    const randomTypeIndex = randomIntFromInterval(0, listingType.length - 1)
    const numberOfFacilities = randomIntFromInterval(
      1,
      listingFacilities.length - 1
    )
    const facilities = []
    for (let i = 0; i < numberOfFacilities; i++) {
      const randomIndexFacilities = randomIntFromInterval(
        0,
        listingFacilities.length - 1
      )
      const randomFacility = listingFacilities[randomIndexFacilities]

      if (!facilities.includes(randomFacility)) {
        facilities.push(randomFacility)
      }
    }

    listing.type = listingType[randomTypeIndex]
    listing.facilities = facilities
    listing.price = randomIntFromInterval(1, 10000)
    listing.hasGarden = Boolean(randomIntFromInterval(0, 1))
    listing.size = randomIntFromInterval(12, 1000)
    listing.img = `https://loremflickr.com/200/200/${listing.type}`

    listings.push(listing)
  }

  return listings
}

const myListings = generateListings(37)
console.log(myListings)

// function filterListings(listings, filter) {
//     return listings.filter((listing) => {
//       if (listing.type === filter.type) {
//         return true
//       }
//     })
//   }

const filterListings = (listings, filter) => {
  return listings.filter((listing) => {
    const typeFilter = !filter.type || filter.type === listing.type

    const facilitiesFilter =
      !filter.facilities || listing.facilities.includes(filter.facilities)

    const maxPriceFilter = !filter.maxPrice || filter.maxPrice > listing.price

    return typeFilter && facilitiesFilter && maxPriceFilter
  })
}

const filteredListings = filterListings(myListings, {
  type: 'Farm',
  maxPrice: 5000,
})
console.log(filteredListings)
// // forEach
// listings.forEach((element) => {
//   //   console.log(element.size)
// })

// map
// const priceListings = listings.map((element) => {
//   return element.price
// })

// const priceListings = listings.map((element) => element.price)

// console.log(priceListings)

// filter

// const cheapListings = listings.filter((listing) => {
//   if (listing.price < 5000) {
//     return true
//   }
// })

// const cheapListings = listings.filter((listing) => listing.price < 5000)

// console.log('cheapListings', cheapListings)

// const expensiveListings = listings.filter((listing) => listing.price > 5000)
// console.log('expensiveListings', expensiveListings)

// const listingWithParking = listings.filter((listing) =>
//   listing.facilities.includes('parking')
// )

// console.log(listingWithParking)
