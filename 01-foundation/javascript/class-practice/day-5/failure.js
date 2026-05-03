// CASE 2: FAILURE
function fetchDataFailure() {
    return new Promise((resolve, reject) => {
        console.log('Fetching...');
        setTimeout(() => {
            const success = false;

            if (success) {
                resolve('Data fetched successfully. Promise fulfilled.');
            } else {
                reject('Promise was NOT fulfilled.');
            }
        }, 1500);
    });
}

fetchDataFailure()
    .then((result) => {
        console.log(result);
    })
    .catch((err) => {
        console.log(err);
    });
