import { localStorageAdapter } from "./adapters/localStorage.adapter";
// import { restAdapter } from "./adapters/rest.adapter";

const store = localStorageAdapter();
// const store = restAdapter();

store.createRecord("type", '[1,2,3,4,5,6]');
