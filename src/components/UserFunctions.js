import axios from 'axios'

export const register = newUser => {
  return axios
    .post('api/user/register', {
      name: newUser.name,
      email: newUser.email,
      password: newUser.password
    })
    .then(response => {
      console.log('Registered')
    }).catch(error =>{
      console.log(error);
    })
}

export const login = user => {
  return axios
    .post('api/user/login', {
      email: user.email,
      password: user.password
    })
    .then(response => {
      localStorage.setItem('usertoken', response.data)
      return response.data
    })
    .catch(err => {
      console.log(err)
      
    })
}



