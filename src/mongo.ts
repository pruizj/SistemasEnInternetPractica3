import { Db, MongoClient } from "mongodb";

export const connectDB = async (): Promise<Db> => {
  const usr = "pruizj";
  const pwd = "1234paula";
  const dbName: string = "Coworking";
  const mongouri: string = `mongodb+srv://${usr}:${pwd}@cluster-nebrija.fombo.mongodb.net/${dbName}?retryWrites=true&w=majority`;

  const client = new MongoClient(mongouri);

  try {
    await client.connect();
    console.info("MongoDB connected");

    return client.db(dbName);
  } catch (e) {
    throw e;
  }
};
