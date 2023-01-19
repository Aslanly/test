import axios from "axios";

const url = ('https://jsonplaceholder.typicode.com/users/');


export const getUserList = () => {
    axios.get(url)
        .then((resp) => {
            resp.data
        }).catch(() => {
            console.log('error')
        })
}

