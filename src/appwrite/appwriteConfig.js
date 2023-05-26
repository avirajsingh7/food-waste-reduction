import { Client, Account, Databases} from "appwrite";

const client = new Client();

client.setEndpoint('https://cloud.appwrite.io/v1').setProject(import.meta.env.VITE_REACT_APP_APPWRITE_PROJECT_ID);

export const account = new Account(client);
