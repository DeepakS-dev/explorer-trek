/* Edit the trip copy and package details here; script.js handles rendering only. */
const SITE_CONTENT = {
  brand: {
    name: "The Explorer",
    tagline: "TRAVEL MORE · LIVE BIGGER",
    navLabel: "Main navigation",
    navItinerary: "Itinerary",
    navPackage: "Package",
    navContact: "Plan your trek"
  },
  hero: {
    eyebrow: "A MOUNTAIN ESCAPE · HIMACHAL PRADESH",
    title: "McLeodganj, with Triund trekking.",
    description: "Five days of mountain air, local sights and a guided trek to Triund Top. Start from Delhi or Gurgaon and let us take care of the journey.",
    image: "IMG-20261104-WA0006.jpg",
    imageAlt: "The Explorer's McLeodganj and Triund trekking package poster",
    imageCaption: "McLeodganj & Triund · Himachal Pradesh",
    phone: "+91 99080 11554",
    itineraryCta: "See the itinerary",
    location: "HIMACHAL PRADESH",
    coordinates: "32.2° N · 76.3° E",
    facts: [
      { value: "5 days", label: "Thursday night to Monday" },
      { value: "2,850 m", label: "Triund Top" },
      { value: "Small group", label: "Local trek guide" }
    ]
  },
  introduction: {
    eyebrow: "TAKE THE SCENIC ROUTE",
    title: "A little town time. A lot of mountain.",
    copy: "Settle into McLeodganj, explore its temples and waterfalls, then follow forest trails up to Triund. Spend the night at camp beneath the Dhauladhar range and wake up to a Himalayan sunrise."
  },
  itinerary: {
    eyebrow: "FIVE DAYS IN THE HILLS",
    title: "The journey, day by day.",
    description: "A practical plan from your overnight departure to your return. The schedule may shift with weather and local conditions.",
    image: "IMG-20261104-WA0005.jpg",
    imageAlt: "Illustrated day-wise itinerary for the McLeodganj and Triund trek",
    imageCaption: "The trip at a glance",
    days: [
      {
        day: "Day 0",
        timing: "Thursday night",
        title: "Depart for the mountains",
        details: "Pickup from designated points in Delhi and Gurgaon, followed by an overnight journey in a luxury traveller. Dinner stop en route."
      },
      {
        day: "Day 1",
        timing: "Friday",
        title: "Arrive in McLeodganj",
        details: "Check in, take a lunch break, then explore Bhagsunag Temple, Bhagsu Waterfall and the local market. Dinner and overnight hotel stay."
      },
      {
        day: "Day 2",
        timing: "Saturday",
        title: "Trek to Triund Top",
        details: "Transfer to the trailhead and hike through forest and mountain scenery with regular rest and hydration breaks. Settle into camp, enjoy sunset and dinner."
      },
      {
        day: "Day 3",
        timing: "Sunday",
        title: "Sunrise, descent and local sights",
        details: "Enjoy an early Himalayan sunrise, have breakfast at camp and trek back down. Explore McLeodganj before beginning the return journey to Delhi or Gurgaon."
      },
      {
        day: "Day 4",
        timing: "Monday morning",
        title: "Arrive back home",
        details: "Reach Delhi and Gurgaon in the morning, with a dinner stop during the overnight return journey."
      }
    ]
  },
  package: {
    eyebrow: "THE DETAILS",
    title: "The essentials, taken care of.",
    description: "A guided Triund experience with round-trip transport from Delhi and Gurgaon, stays, meals and local sightseeing included.",
    inclusions: [
      "Pickup and drop-off from/to Gurgaon and Delhi by luxury tempo traveller",
      "Two nights' accommodation: one hotel night and one night camping",
      "Triund trekking and camping with a local guide",
      "McLeodganj sightseeing, including Dalai Lama Temple and Bhagsu Waterfall",
      "Dedicated tour captain and 24/7 on-call assistance",
      "Meals and trek essentials as outlined in the itinerary"
    ],
    inclusionsTitle: "Included in your trip",
    departuresTitle: "Upcoming departures",
    bookingLabel: "Booking amount",
    offerLabel: "DIWALI SPECIAL · PER PERSON",
    price: "₹7,499",
    priceCaption: "Advertised package price",
    bookingAmount: "₹1,000",
    departureDates: ["12–16 November", "19–23 November", "26–30 November"],
    availabilityNote: "Departure dates and offer details are reproduced from the supplied flyer. Please confirm current availability before booking.",
    priceDisclaimer: "Final inclusions, availability and price are subject to confirmation with The Explorer.",
    cta: "Ask about availability"
  },
  contact: {
    eyebrow: "YOUR NEXT TRAIL IS CALLING",
    title: "Let’s plan your Triund trip.",
    description: "Ask about departure availability, pickup points or what to pack. We’ll help you get ready for the trail.",
    phone: "+91 99080 11554",
    email: "explorer.himalayas@gmail.com",
    hours: "Call or WhatsApp for current departures and booking details."
  },
  footerNote: "Explore · Connect · Belong"
};
