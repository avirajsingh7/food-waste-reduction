import { Client, Account, Databases} from "appwrite";

const client = new Client();

client.setEndpoint('https://cloud.appwrite.io/v1').setProject('ProjectID');

export const account = new Account(client);
