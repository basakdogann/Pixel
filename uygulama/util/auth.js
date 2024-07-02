import axios from "axios";

const API_KEY = "AIzaSyDWLN6umCfF6njWN-qDDr5PlWUyicvtwxw";

async function authenticate(mode, email, password, returnType='token') {
  try {
    const response = await axios.post(
      `https://identitytoolkit.googleapis.com/v1/accounts:${mode}?key=${API_KEY}`,
      {
        email: email,
        password: password,
        returnSecureToken: true,
      }
    );
    const uuid = response.data.localId;
    const token = response.data.idToken;
    if(returnType === 'uuid') return uuid;
    return token;
  } catch (error) {
    console.error('Authentication error:', error.response ? error.response.data : error.message);
    throw error;
  }
}

async function getProfile(token) {
  const response = await axios.post(
    `https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=${API_KEY}`,
    {
      idToken: token,
    }
  );
  const uuid = response.data.users[0].localId;
  return uuid;
}

export function getUserInfo(token) {
  return getProfile(token);
}
export function createUser(email, password) {
  return authenticate("signUp", email, password);
}

export function login(email, password) {
  return authenticate("signInWithPassword", email, password);
}
