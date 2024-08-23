import ReactDOM from 'react-dom/client';
import { Provider } from "react-redux";
import App from './App.tsx';
import "./styles.scss";
import '@/features/i18n/I18n';
import store from "./store";



const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);

root.render(
    <Provider store={store}>
        <App />
    </Provider>
);
