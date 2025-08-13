function listofServices(services) {
  // If input isn't an array, just return an error message  using throw
  if (!Array.isArray(services)) {
    throw new Error(" Alert Alert Input must be an array")
  }

  return services
    .slice() // copy to avoid mutating the original list
    .sort((a, b) => b.rating - a.rating) // sort from highest to lowest 
    .slice(0, 3); // take the first three elements

}

// Correct array of objects
const servicesListwithRatings = [
  { name: "Tutoring", rating: 4.6 },
  { name: "Food Delivery", rating: 4.9 },
  { name: "Tech Support", rating: 4.3 },
  { name: "Child Care", rating: 4.8 },
];

console.log(listofServices(servicesListwithRatings));
