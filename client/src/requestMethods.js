import axios from 'axios';

const BASE_URL = 'http://localhost:5000/api/';
const TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZDJkNWI2YjI5NGNlOTIyMTk1MTQ1ZCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY3NTI3NzgyMiwiZXhwIjoxNjc1NTM3MDIyfQ.c5oIhVVSrkKZVMBsaLlLO68Io82cqbUiQz4usoSMRxU';

export const publicRequest = axios.create({
    baseURL: BASE_URL,
});

export const userRequest = axios.create({
    baseURL: BASE_URL,
    header:{token:'test ${TOKEN}'},
});