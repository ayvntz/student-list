import { Provider } from "react-redux";
import { createGlobalStyle } from "styled-components";
import { store } from "./redux/store";
import ClassPage from "./ClassPage";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Roboto', sans-serif;
    color: #333;
    line-height: 1.6;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
  }
`;

const App = () => {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <ClassPage />
    </Provider>
  );
};

export default App;
