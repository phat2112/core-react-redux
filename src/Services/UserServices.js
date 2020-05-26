import Axios from 'axios'
import { camelizeKeys, decamelizeKeys } from 'humps'

const userList = ({page}) => {
    console.log('page', page)
    return Axios.get(`https://reqres.in/api/users?page=${page}`, decamelizeKeys(page))
                .then(res => camelizeKeys(res.data))
}
export const UserService = {
    userList,
}