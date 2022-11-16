import { Adapter } from ".";

type Entity = Record<string, string>;

export const localStorageAdapter: Adapter = () => {
    if (!localStorage) {
        throw new Error('localStorage not awailable');
    }
    return {
  findRecord(type, id) {
    return Promise.resolve((JSON.parse(localStorage.getItem(type) || ''))[id]);
  },
  findAll(type) {
    return Promise.resolve(JSON.parse(localStorage.getItem(type) || ''));
  },
  deleteRecord(type, id) {
    const t: Array<Entity> = JSON.parse(localStorage.getItem(type) || '');
    localStorage.setItem(
      type,
      JSON.stringify(t.filter((item: Entity) => item.id !== id))
    );
    return Promise.resolve(JSON.parse(localStorage.getItem(type) || ''));
  },
  updateRecord(type, id, payload) {
    const t: Array<Entity> = JSON.parse(localStorage.getItem(type) || '');
    localStorage.setItem(
      type,
      JSON.stringify(t.map((item: Entity) => (item.id === id ? payload : item)))
    );
    return Promise.resolve(JSON.parse(localStorage.getItem(type) || ''));
  },
  createRecord<T, P>(type, payload: P): Promise<T> {
    localStorage.setItem(type, JSON.stringify(payload))
    return Promise.resolve() as Promise<T>;
  }
}};
