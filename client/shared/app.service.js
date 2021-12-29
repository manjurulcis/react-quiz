export const saveAnswer = async (answer) => {
    try {
        const requestOptions = {
            method: "post",
            headers: {
            "Content-Type": "application/json",
            },
            body: JSON.stringify(answer),
        };  
        return fetch(process.env.API_URL + '/storedata', requestOptions);
    } catch (error) {
       console.log(error);
    }
}