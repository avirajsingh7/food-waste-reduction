import { Client, Account, Databases} from "appwrite";

const client = new Client();

client.setEndpoint('https://cloud.appwrite.io/v1').setProject('646b5e5b7caf699ef5f7');

export const account = new Account(client);
