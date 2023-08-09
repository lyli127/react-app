import "dotenv/config";
import PG from "pg";
import bcrypt from "bcrypt";

import path from "node:path";
import fs from "node:fs";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const CERT_PATH = path.join(__dirname, "../certs/aws-rds-global-bundle.pem");

