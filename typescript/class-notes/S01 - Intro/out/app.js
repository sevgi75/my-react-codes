const car = {
    type: "Toyota",
    year: 2020,
    sunroof: false,
    age(year) {
        console.log(`Age is ${year - 2009}`);
    }
};
car.age(2024);
car.year = 2019;
