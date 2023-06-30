const inquirer = require('inquirer');
require('colors');

const preguntas =[
    {
        type:'list',
        name:'opcion',
        message:'¿Que desea hacer?',
        choices:[
            {
                value:1,
                name:`${'1.'.green} Buscar ciudad`
            },
            {
                value:2,
                name:`${'2.'.green} Historial`
            },
            {
                value:0,
                name:`${'0.'.green} Salir `
            },
            
        ]
    }
]


const inquirerMenu = async() => {

    console.clear();
    console.log('========================='.green);
    console.log('  Seleccione una opcion'.white)
    console.log('=========================\n'.green);

    const prompt = await inquirer.createPromptModule();
    const {opcion} = await prompt(preguntas);
    return opcion;

}

const pausa = async() =>{
    const question = [
        {
            type:'input',
            name:'enter',
            message:`Presione ${'ENTER'.green} para continuar`
        }
    ]

    console.log('\n');
    const pausa = await inquirer.createPromptModule();
    await pausa(question);

}


const leerInput = async( message)=>{

    const question = [
        {
            type:'input',
            name:'desc',
            message,
            validate( value ){
                if(value.length === 0 ){
                    return 'Porfavor ingrese un valor'
                }
                return true;    
            }
        }
    ];

    const algo = await inquirer.createPromptModule();
    const {desc} = await algo(question);
    return desc;

}

const listarLugares = async(lugares = []) =>{

    const choices = lugares.map((lugar,i) =>{

        const idx =`${i + 1}.`.green;

        return{
            value: lugar.id,
            name :`${idx} ${lugar.nombre}`
        }
    });

    choices.unshift({
        value:'0',
        name:'0.'.green + ' Cancelar'
    });

    const preguntas =[
        {
            type:'list',
            name:'id',
            message:'Seleccione lugar',
            choices
        }
    ]

    const prompt = await inquirer.createPromptModule();
    const {id} = await prompt(preguntas);
    return id

    // {
    //     value:'1',
    //     name:`${'1.'.green} Crear tarea`
    // },
}

const confirmar = async(message) =>{

    const question = [
        {
            type:'confirm',
            name:'ok',
            message
        }
    ]

    const prompt = await inquirer.createPromptModule();
    const {ok} = await prompt(question);
    return ok;

}

const mostrarListadoCheckList = async(tareas = []) =>{

    const choices = tareas.map((tarea,i) =>{

        const idx =`${i + 1}.`.green;

        return{
            value: tarea.id,
            name :`${idx} ${tarea.desc}`,
            checked:(tarea.completadoEn) ? true : false
        }
    });

   
    const pregunta =[
        {
            type:'checkbox',
            name:'ids',
            message:'Seleccione',
            choices
        }
    ]

    const prompt = await inquirer.createPromptModule();
    const {ids} = await prompt(pregunta);
    return ids 
}




module.exports = {
    inquirerMenu,
    pausa,
    leerInput,
    listarLugares,
    confirmar,
    mostrarListadoCheckList
}




