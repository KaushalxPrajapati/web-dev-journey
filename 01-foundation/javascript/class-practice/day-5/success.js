// CASE 1: SUCCESS
function fetchDataSuccess() {
    return new Promise((resolve, reject) => {
        console.log('Fetching...');
        setTimeout(() => {
            try {
                resolve('Data fetched successfully. Promise fulfilled.');
            } catch (err) {
                reject('Promise was NOT fulfilled.');
            }
        }, 1500);
    });
}

fetchDataSuccess()
    .then((result) => {
        console.log(result);
    })
    .catch((err) => {
        console.log(err);
    });
