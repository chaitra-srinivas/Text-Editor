import { openDB } from "idb";

const initdb = async () =>
  openDB("jate", 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains("jate")) {
        console.log("jate database already exists");
        return;
      }
      db.createObjectStore("jate", { keyPath: "id", autoIncrement: true });
      console.log("jate database created");
    },
  });

// TODO: Add logic to a method that accepts some content and adds it to the database
export const putDb = async (content) => {
  console.log("Add and update content to the database");

  // Creates a connection to the database and the database version we want to use

  const jateDB = await openDB("jate", 1);

  // Creates a new transaction and specifies the database and data privileges

  const tx = jateDB.transaction("jate", "readwrite");

  // Opens the desired object store

  const store = tx.objectStore("jate");

  // .add() method adds data to the database

  const request = await store.add(content);

  // Gets confirmation of the request

  const result = await request;
  console.log("Data saved to the database", result);
};

// TODO: Add logic for a method that gets all the content from the database
export const getDb = async () => {
  console.log("Get all the content from the database");

  // Creates a connection to the database and the database version we want to use
  const jateDB = await openDB("jate", 1);

  // Creates a new transaction and specifies the database and data privileges

  const tx = jateDB.transaction("jate", "readonly");

  // Opens the desired object store

  const store = tx.objectStore("jate");

  // getAll() method gets all the data from the database

  const request = store.getAll();

  // Get confirmation of the request

  const result = await request;
  console.log("result.value", result);
  return result;
};

initdb();
