import axios from 'axios';

const findTeamByUserIdService = async (userId) => {
  try {
    const response = await axios.get(`http://localhost:8080/api/v1/teams/user/${userId}/`);
    if (response.data.id !== undefined) {
      return response.data;
    }
  } catch (e) {
    console.log(e);
  }
};

const findPoke = async (data) => {
  try {
    const requestBody = {
      name: data.poke
    }
    const response = await axios.post('http://localhost:8080/api/v1/poke/', requestBody);
    if (response.data.id !== undefined) {
      return response.data;
    }
  } catch (e) {
    console.log(e);
  }
}

const removePokeFromTeam = async (data) => {
  try {
    const response = await axios.post(`http://localhost:8080/api/v1/teams/removePoke`, data);
    if (response.data.id !== undefined) {
      return response.data;
    }
  } catch (e) {
    console.log(e);
  }
}

const addPokeToTeam = async (data) => {
  const poke = {
    name:data.name};
  const userId = data.userId;
  try {
    const pokeToAddResponse = await axios.post('http://localhost:8080/api/v1/poke/', poke)
    const findTeamResponse = await axios.get(`http://localhost:8080/api/v1/teams/user/${userId}`)
    const addPokeTeambodyRequest = {
      teamId: findTeamResponse.data.id,
      poke: pokeToAddResponse.data
    }
    const addPokeTeamResponse = await axios.post("http://localhost:8080/api/v1/teams/add", addPokeTeambodyRequest)
    return addPokeTeamResponse;
  } catch (e) {
    console.log(e);
  }
}

export {findTeamByUserIdService, findPoke, removePokeFromTeam, addPokeToTeam};