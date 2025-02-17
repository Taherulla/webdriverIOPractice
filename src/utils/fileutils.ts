import fs from 'fs';
export const fileRead=(path:string):string=>{
    let data = fs.readFileSync(path);
    return JSON.parse(data);   
}