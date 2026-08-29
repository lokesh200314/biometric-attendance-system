

import React from "react";
import { Provider } from "react-redux";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import Routes from "../Routes";
// import ToastProvider from "./components/notification/ToastContext";
// import "../react/css/font.css";


// import "react-tooltip/dist/react-tooltip.css";
// import "../react/css/HtmlEditor.css";
import { store } from "../redux/store/store"

const queryClient = new QueryClient();

function App() {

    return (
        <>
            <QueryClientProvider client={queryClient}>
                <Provider store={store}>
                    {/* <ToastProvider> */}
                        <Routes />
                    {/* </ToastProvider> */}
                </Provider>
            </QueryClientProvider>
        </>
    );
}

export default App;
