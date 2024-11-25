import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import store from "./store.js";
import { Provider } from "react-redux";
import "./index.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

// store.subscribe(() => {
//   const state = store.getState();
//   localStorage.setItem("myPosts",state.post.posts);
// });

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);
