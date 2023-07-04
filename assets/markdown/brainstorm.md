# NOTE TAKING APP W/ DATABASE

packages needed: express express-handlebars express-session bcrypt sequelize mysql2 dotenv

login system authentication for notes to belong to user

database:
sql :
DROP TABLE IF EXISTS noteify_db;
CREATE DATABASE noteify_db;

models:

class User extends Model:
id: uuidv4
email: STRING, validate email
pass: STRING

class Note extends Model:
id: UUID
user_id: references model ‘user’
date: DATE
title: STRING
content: TEXT

bcrypt pass snippet:
async createPass () => {
     const hashPass = await bcrypt.hash(myPlaintextPassword, 10);
}
