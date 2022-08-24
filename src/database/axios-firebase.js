import axios from "axios";

const databaseUrl = axios.create({
    baseURL: 'https://to-do-d6228-default-rtdb.europe-west1.firebasedatabase.app/'
});

export default databaseUrl;