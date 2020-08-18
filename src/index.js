import App from "./App.svelte";
import { firebaseConfig } from "./firebaseConfig";
import firebase from "firebase/app";
import "firebase/firestore";

const appFB = firebase.initializeApp(firebaseConfig);
export const fireStore = appFB.firestore();

var app = new App({
    target: document.body,
});

export default app;

// Hot Module Replacement (HMR) - Remove this snippet to remove HMR.
// Learn more: https://www.snowpack.dev/#hot-module-replacement
if (import.meta.hot) {
    import.meta.hot.accept();
    import.meta.hot.dispose(() => {
        app.$destroy();
    });
}
