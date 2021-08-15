import {json, Request,Response} from 'express';
import {getRepository,Repository}from 'typeorm';
import {User}from '../entity/User';
var Cryptr = require('cryptr');
var cryptr = new Cryptr('myTotalySecretKey');
var jwt = require('jsonwebtoken');
var config =require('../models/config');
export const login = async(req:Request,res:Response):Promise<Response>=> {
    console.log("adentro",req.body)
    var token;
    var nickname=req.body.Nickname;
    var password=req.body.Password;
    
    const authUser = await getRepository(User).findOne({ Nickname: nickname },{relations:['IDUserType']});
    console.log("usuarioauth",authUser)
    if(authUser!=undefined &&password==cryptr.decrypt(authUser?.Password) && authUser?.IDUserType.UserType=="Admin")
    {
        token= jwt.sign({tipo:authUser.IDUserType.UserType,id:authUser.IDUser,cedula:authUser.Identification,nombre:authUser.FirstName+" "+authUser.LastName},config.secret,{expiresIn: 86400})
        return res.json({auth:true,Token:token});
    }
    else{
        return res.json({auth:false,Token:null});
    }
};
export const logout = async(req:Request, res:Response):Promise<Response> => {
    console.log("echo");
    
    return res.json({auth:false,Token:null,asp:false});
};