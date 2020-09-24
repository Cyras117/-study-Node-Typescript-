import {Request,Response} from 'express';
import createUser from './services/CreateUser';

export function rotas(request:Request, response:Response){
    const user = createUser({
        email: 'alexsa',
        password: '13fds',
        techs: ['t1','t2',{title:'e1',experience:123}],
    });
    return response.json({message:'hello'});
}