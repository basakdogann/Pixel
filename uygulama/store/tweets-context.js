import { createContext, useReducer, useEffect } from "react";
import { fetchTweets, storeTweet, updateTweet, deleteTweet } from "./tweetService"; // Import fonksiyonları

// TweetsContext oluşturuluyor
export const TweetsContext = createContext({
  tweets: [],
  addTweet: (tweetData) => {},
  setTweets: (tweets) => {},
  deleteTweet: (id) => {},
  updateTweet: (id, tweetData) => {},
});

// Reducer fonksiyonu
function tweetsReducer(state, action) {
  switch (action.type) {
    case "ADD":
      return [action.payload, ...state];
    case "SET":
      return action.payload;
    case "UPDATE":
      const updatableTweetIndex = state.findIndex(
        (tweet) => tweet.id === action.payload.id
      );
      const updatableTweet = state[updatableTweetIndex];
      const updatedItem = { ...updatableTweet, ...action.payload.data };
      const updatedTweets = [...state];
      updatedTweets[updatableTweetIndex] = updatedItem;
      return updatedTweets;
    case "DELETE":
      return state.filter((tweet) => tweet.id !== action.payload);
    default:
      return state;
  }
}

// TweetsContextProvider bileşeni
function TweetsContextProvider({ children }) {
  const [tweetsState, dispatch] = useReducer(tweetsReducer, []);

  useEffect(() => {
    async function getTweets() {
      const tweets = await fetchTweets();
      setTweets(tweets);
    }
    getTweets();
  }, []);

  async function addTweet(tweetData) {
    const id = await storeTweet(tweetData);
    dispatch({ type: "ADD", payload: { ...tweetData, id } });
  }

  function setTweets(tweets) {
    dispatch({ type: "SET", payload: tweets });
  }

  async function deleteTweet(id) {
    await deleteTweet(id);
    dispatch({ type: "DELETE", payload: id });
  }

  async function updateTweet(id, tweetData) {
    await updateTweet(id, tweetData);
    dispatch({ type: "UPDATE", payload: { id, data: tweetData } });
  }

  const value = {
    tweets: tweetsState,
    addTweet: addTweet,
    setTweets: setTweets,
    deleteTweet: deleteTweet,
    updateTweet: updateTweet,
  };

  return (
    <TweetsContext.Provider value={value}>
      {children}
    </TweetsContext.Provider>
  );
}

export default TweetsContextProvider;