
import { getToken } from './auth';

const token = getToken();

const configHeaders = {
    headers: {
        'Authorization': "Bearer " + token,
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    }
};

export default configHeaders;