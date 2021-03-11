import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

//createstoe is redux function to add stre
// applymiddleware to add thunk that make me add sync code or return function in action
// copmose is job to compine kaza store sawa
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

//redux provider to make all react website see  redux
import { Provider } from "react-redux";

//rootreducer is the comine reducer that will send to store
import rootReducer from "./store/reducers/rootReducer";

//firebase with redux to add api in aciton

// reduxFirestore and reduxReduxFirebase 3ashan 7ewr kaza store ma3a al compose 3ashan lama asta5dem
//  getfirestore we getfire base fel action ye3raf ana batkalem 3ala anhy projec fel fire base (config file)
//  we tab3an gebt al config file ahou ta7teh

import { reduxFirestore, getFirestore } from "redux-firestore";
import { reactReduxFirebase, getFirebase } from "react-redux-firebase";

import fbConfig from "./config/fbConfig.js";

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk.withExtraArgument({ getFirestore, getFirebase })),
    reduxFirestore(fbConfig),
    reactReduxFirebase(fbConfig, {
      useFirestoreForProfile: true,
      userProfile: "users",
      attachAuthIsReady: true,
    })
  )
);

store.firebaseAuthIsReady.then(() => {
  ReactDOM.render(
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>,
    document.getElementById("root")
  );
  serviceWorker.unregister();
});
