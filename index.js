import { writeFileSync } from 'node:fs';

const content = "Test content!";

try{
    writeFileSync('./test.txt', content)
    console.log('Success!')
}catch(err){
    console.error(err)
}