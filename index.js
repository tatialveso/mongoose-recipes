import * as dotenv from 'dotenv'
import dbConnection from './config/db.config.js'

dotenv.config()

dbConnection()