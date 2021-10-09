import{error}from 'spec';
import yargs, {Argv} from "yargs";
let argv=yargs
            .option('b',{
                alias:'base',
                type:'number',
                demandOption:true,
                describe:'Es la base de la table de multiplicar'
            })
            .option('h',{
                alias:'hasta',
                type:'number',
                demandOption:true,
                default:10
            })
            .option('l',{
                alias:'listar',
                type:'boolean',
                demandOption:true,
                default:false,
                describe:'Muestra la tabla en consola'
            })
            .check((argv,options)=>{
                return isNaN(argv['b'] as number)
                    ?error(`la base tiene que ser un numero`)
                    :true
            })
            .argv;
export default argv