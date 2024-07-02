import axios from "axios";

const BACKEND_URL =
  "https://pixels-91d7f-default-rtdb.europe-west1.firebasedatabase.app/";

export async function storeTweet(tweetData) {
  const response = await axios.post(`${BACKEND_URL}/tweets.json`, tweetData);
  const id = response.data.name;
  return id;
}

export async function fetchTweets() {
  const response = await axios.get(BACKEND_URL + "/tweets.json");
  const tweets = [];

  for (const key in response.data) {
    const tweetObj = {
      id: key,
      text: response.data[key].text,
      date: new Date(response.data[key].date),
      user: response.data[key].user,
    };
    tweets.push(tweetObj);
  }

  return tweets;
}
export function updateTweet(id, tweetData) {
  return axios.put(`${BACKEND_URL}/tweets/${id}.json`, tweetData);
}

export function deleteTweet(id) {
  return axios.delete(`${BACKEND_URL}/tweets/${id}.json`);
}
