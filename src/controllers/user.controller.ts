import {Request,Response} from 'express';
import {User}from '../entity/User';
import {dbActions} from '../persistence/dbActions';
var Cryptr = require('cryptr');
var cryptr = new Cryptr('myTotalySecretKey');

export const getUsers = (req:Request,res:Response):Promise<Response>=>{
    var relations=['IDUserType'];
    return dbActions.read(User,req,res,relations);
};
export const updateUser = async(req:Request,res:Response):Promise<Response>=>{
    const hashencriptedNumber = cryptr.encrypt(req.body.Password);
    req.body.Password=hashencriptedNumber;
    var today = new Date();
    var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var dateTime = date+' '+time;
    req.body.ModificationDate= dateTime;
    console.log(req.params.id,req.body)
    return dbActions.update(User,req,res);
};
export const deleteUser = async(req:Request,res:Response):Promise<Response>=>{
    return dbActions.delete(User,req,res);
};