import {Request,Response} from 'express';
import { getRepository } from 'typeorm';
import {CreditCard}from '../entity/CreditCard';
import { User } from '../entity/User';
import {dbActions} from '../persistence/dbActions';
var Cryptr = require('cryptr');
var cryptr = new Cryptr('myTotalySecretKey');

export const getCreditCards = (req:Request,res:Response):Promise<Response>=>{
    var relations=['IDClient'];
    return dbActions.readandDecrypt(CreditCard,req,res,relations);
};
export const getCreditCard = async(req:Request,res:Response):Promise<Response>=>{
    var relations=['IDClient'];
    return dbActions.readOne(CreditCard,req,res,relations);
};
export const updateCreditCard = async(req:Request,res:Response):Promise<Response>=>{
    const hashencriptedNumber = cryptr.encrypt(req.body.Number);
    console.log("number",cryptr.decrypt(hashencriptedNumber))
    req.body.Number=hashencriptedNumber;
    var today = new Date();
    var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var dateTime = date+' '+time;
    req.body.ModificationDate= dateTime;
    console.log(req.params.id,req.body)
    return dbActions.update(CreditCard,req,res);
};
export const deleteCreditCard = async(req:Request,res:Response):Promise<Response>=>{
    return dbActions.delete(CreditCard,req,res);
};

export const createCreditCard = async(req:Request,res:Response):Promise<Response>=>{
    var hashpasswordUser=cryptr.encrypt(req.body.User.Password);
    req.body.User.Password=hashpasswordUser;
    const hashencriptedNumber = cryptr.encrypt(req.body.CreditCard.Number);
    console.log("number",cryptr.decrypt(hashencriptedNumber))
    req.body.CreditCard.Number=hashencriptedNumber;
    var today = new Date();
    var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var dateTime = date+' '+time;
    req.body.User.ModificationDate= dateTime;
    req.body.User.CreationDate=dateTime;
    req.body.CreditCard.ModificationDate= dateTime;
    req.body.CreditCard.CreationDate=dateTime;
    const newUser = getRepository(User).create(req.body.User);
    const results = await getRepository(User).save(newUser);
    const user = await getRepository(User)
    .createQueryBuilder("User")
    .select("User.IDUser")
    .orderBy("User.IDUser", "DESC")
    .getOne();
    try {
        var creditcards = req.body.CreditCard;
                creditcards.IDClient=user;
                const exp = getRepository(CreditCard).create(creditcards);
                const results = await getRepository(CreditCard).save(exp);
    } catch (error) {
        console.log("no hay experiencias");
    }
    return res.json(results);
};