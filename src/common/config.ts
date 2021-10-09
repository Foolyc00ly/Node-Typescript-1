import fs from 'fs';
import 'colorts/lib/string';

import{error} from 'spec';
interface Main{
    toString: (base:number,listar:boolean) => void;
    Event: (base:number,listar:boolean,hasta:number) => void;
}

export const CONSOLEHandler=(()=>{
    return{
        render:(element:Main,base:number,listar:boolean,hasta:number)=>{
            element.toString(base,listar);
            element.Event(base,listar,hasta);
        }
    }
})();

export const Main=(()=>{
    const changeOperation=async(base:number,hasta:number):Promise<string>=>{
        let salida='';
        for(let i=1;i<=hasta;i++){
            salida+=`${base}x${i}=${base*i}\n`
        }
        return !!salida?salida:error(`No se recibio los datos`);
    }
    const onConsoleLog=async(base:number,listar:boolean,hasta:number):Promise<string|undefined>=>{
        try{
            let salida=await changeOperation(base,hasta);
            fs.writeFile(`./src/data/tabla-${base}.txt`,salida,(err)=>{
                try{
                    return !!err
                        ?error(`No se guardo el archivo tabla-${base}.txt`)
                        :console.log(`tabla-${base}.txt creada`.green);
                }catch(err){
                    throw err
                }
            });
            return !!salida&&listar?salida:error(`No se creo el archivo`);
        }catch(err){
            throw err;
        }
    }
    return {
        toString:(base:number,listar:boolean)=>{
            return listar
                ?console.log(`
            =====================
                TABLA DEL: ${base}
            =====================
            `.blue)
            :error(`No hay Lista`);
        },
        Event:(base:number,listar:boolean,hasta:number)=>{
            const container=(()=>
                onConsoleLog(base,listar,hasta)
                    .then(salida=>console.log((salida as string).red))
                    .catch(console.log)
            )();
            container
        }
    }
})();

