require("dotenv").config();

const { Client } = require("pg");

const SQL = `
CREATE TABLE IF NOT EXISTS messages (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  text VARCHAR ( 255 ),
  username VARCHAR ( 255 ),
  added VARCHAR ( 255 )

);

INSERT INTO messages (text,username,added) 
VALUES 
  ('Hi there!', 'Amando', '${Intl.DateTimeFormat("en-US", {
    timeStyle: "short",
    dateStyle: "short",
  }).format(new Date())}'),
  ('Hello World!', 'Charles', '${Intl.DateTimeFormat("en-US", {
    timeStyle: "short",
    dateStyle: "short",
  }).format(new Date())}');
`;

async function main() {
  console.log("seeding...");
  const client = new Client({
    connectionString: `${process.env.URL}`,
  });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("done");
}

main();
