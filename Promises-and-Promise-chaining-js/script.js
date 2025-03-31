function fetchData(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let success = true;
            if (success) {
                resolve("✅ Data fetched successfully");
            } else{
                reject("⛔ Error fetching data");
            }
        }, 3000);
    });
}

// let response = fetchData();
// console.log(response);

fetchData()
    .then((data) => {
        console.log(data);
        return `Tech-Code_`;
    })
    .then((value) => {
        console.log(value);
    })
    .catch((error) => console.error(error))