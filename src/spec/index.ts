
const error=(message:string):Promise<never>=>Promise.reject(message);

export{error};