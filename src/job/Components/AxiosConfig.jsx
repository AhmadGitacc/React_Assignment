import cookies from 'js-cookies';

const Token = cookies.getItem('token')
export const config = {
  headers: {
    'content-type': 'multipart/form-data',
    'Authorization': `Bearer ${Token}`
  }
}
