import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('PWA database already exists.');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('PWA database created.');
    },
  });
  
  // Add logic to a method that accepts some content and adds it to the database
  export const putDb = async (content) => {
    try {
    console.log('PUT to the database');

    // jateDb is established by initializing database connection
    const jateDb = await initdb();

    // tx is a transaction with store name = jate and will possess read/write access
    const tx = jateDb.transaction('jate', 'readwrite');
    const store = tx.objectStore('jate');

    // request will then push the updates into jateDb --> each addition will have a unique identifier (id created at db.createObjectStore) and the value that will be stored
    const request = store.put({ id: id, value: content });
    const result = await request;
    console.log('🚀 Data has been saved to the database.', result)
    
    // Handle errors - console.error('putDb not implemented')
    } catch (error) {
    console.log('⚠️ Could not save data.');
    }
  };
  
  // Add logic for a method that gets all the content from the database
  export const getDb = async () => {
    console.log('GET all from the database');

    // use openDB to initialize the connection with the database in the specified version --> ititDb() sets up the structure of the database | when we pull existing data, we do not want to continue resetting the structure 
    const jateDb = await openDB('jate', 1);

    // this transaction is readonly since we are retrieving data instead of writing new data
    const tx = jateDb.transaction('jate', 'readonly');
    const store = tx.objectStore('jate');
    const request = store.getAll();
    const result = await request;
    // Handle errors - console.error('getDb not implemented')
    console.log(result.value);
    console.log('🚀 Data retrieved from the database.', result)
    return result?.value;
  };

initdb();
