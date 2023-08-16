import "dotenv/config";
import PG from "pg";

import path from "node:path";
import fs from "node:fs";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const CERT_PATH = path.join(__dirname, "/certs/aws-rds-global-bundle.pem");

const pool = new PG.Pool({
  ssl: {
    rejectUnauthorized: true,
    // https://truststore.pki.rds.amazonaws.com/global/global-bundle.pem
    ca: fs.readFileSync(CERT_PATH),
  },
});

// const pool = new PG.Pool({
//   user: process.env.PGUSER,
//   host: process.env.PGHOST,
//   database: process.env.PGDATABASE,
//   password: process.env.PGPASSWORD,
//   port: process.env.PGPORT,
// });

export default pool;
