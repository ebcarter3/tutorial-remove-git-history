import {readFileSync} from 'fs'

const user = '{"name": "test name", "dob": "9999-99-99"}'

function readUsers (userFile) {
    return readFileSync(userFile)
}

function printUser (users) {
    // comment 
    console.log(users)
}

printUser(user)
