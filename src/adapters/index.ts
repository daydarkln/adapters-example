export type Adapter = () => {
    findRecord: <T,P>(type: string, id: string, payload: P) => Promise<T>
    createRecord: <T,P>(type: string, payload: P) => Promise<T>
    updateRecord: <T,P>(type: string, id: string, payload: P) => Promise<T>
    deleteRecord: <T>(type: string, id: string) => Promise<T>
    findAll: <T>(type: string) => Promise<T>
  }