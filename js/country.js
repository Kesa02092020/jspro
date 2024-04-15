const countries = [
    {
        city: 'London',
        code: 'UK',
        latitude: 51.5285578,
        longitude: -0.2420242
    },
    {
        city: 'Manchester',
        code: 'UK',
        latitude: 53.4722249,
        longitude: -2.2936739
    },
    {
        city: 'Paris',
        code: 'FR',
        latitude: 48.8588376,
        longitude: 2.2768487
    },
    {
        city: 'Nice',
        code: 'FR',
        latitude: 43.703169,
        longitude: 7.1826056
    },
    {
        city: 'Berlin',
        code: 'DE',
        latitude: 52.5065117,
        longitude: 13.1438688
    },
    {
        city: 'Munich',
        code: 'DE',
        latitude: 48.1548252,
        longitude: 11.4014097
    }
];
let citycode = 'DE';

const getcity = countries.filter((cities) => {
    return cities.code === citycode;
})
console.log(getcity.map((item) => item.city));

//Example 2
let country = [
    { id: 1, name: "india", cities: ["chennai", "trichy", "covai"] },
    { id: 2, name: "china", cities: ["Shanghai", "Beijing", "Tianjin"] },
    { id: 3, name: "nepal", cities: ["Kathmandu", " Pokhara", "Ghorahi"] },
];

let nameCity = 'india';

const fetchCity = country.filter((item) => {
    return item.name === nameCity;
})

console.log("Filter Array", fetchCity);

let listofcity = fetchCity.map((city) => city.cities)
console.log("Map arrray",listofcity);

let [desArray] = fetchCity;

console.log("Destructures Array to Object", desArray);

console.log("Destructures Array to Object", desArray.cities);

let { id, name, cities: city } = desArray;

console.log("Destructures the object and get object Array", city);

//Example 3

//console.log(countries);

const findcity = country.find((item)=> item.name === nameCity);

console.log(findcity);

console.log(findcity.cities);

const {city:cities} = findcity

