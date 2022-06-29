import { createStore } from "vuex";
import menu from "./Modules/menu";

const store = createStore({ modules: { menu } });

export default store;
