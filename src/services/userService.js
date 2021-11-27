import axios from 'axios';

const createUserAndTeam = async (user) => {
  try {
    const userToInsert = {name: user.name, email: user.email, password: user.password};
    const insertUserResponse = await axios.post('http://localhost:8080/api/v1/users/create', userToInsert);
    const requestToCreateTeam = {
      userId: insertUserResponse.data.id,
      teamName: `${insertUserResponse.data.name}-team`,
    }
    await axios.post('http://localhost:8080/api/v1/teams/create', requestToCreateTeam)
    return insertUserResponse.data;
  } catch (e) {
    console.log(e);
  }
};

const findUser = async (data) => {
  try {
    const user = {email: data.email, password: data.password};
    const response = await axios.post('http://localhost:8080/api/v1/users/login', user);
    if(response.data.length !== 0) {
      return response.data[0];
    } else {
      console.log("Usuário ou senha inválidos.");
    }
  } catch(e) {
    console.log(e);
  }
};


export {createUserAndTeam, findUser};