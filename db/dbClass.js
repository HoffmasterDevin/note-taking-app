const fs = require('fs');
const util = require('util');

const dbData = './db/db.json';

const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

class Database {
    async readNotes() {
        try {
            const rawNotes = await readFileAsync(dbData, 'UTF8');
            return rawNotes ? JSON.parse(rawNotes) : [];
        } catch (error) {
            throw error;
        }
    }

}

module.exports = new Database();