export const saveAnswer = async (answer) => {
    try {
        const requestOptions = {
            method: "post",
            headers: {
            "Content-Type": "application/json",
            },
            body: JSON.stringify(answer),
        };  
        const res = fetch(process.env.API_URL + '/storedata', requestOptions)
        .then((response) => response.json())
        return res;
    } catch (error) {
       console.log(error);
    }
}