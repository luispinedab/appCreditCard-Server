import {Request,Response} from 'express';
import {getRepository}from 'typeorm';
var Cryptr = require('cryptr');
var cryptr = new Cryptr('myTotalySecretKey');
export class dbActions{
    
    static  async read(entity:any,req:Request,res:Response,relationstables:any):Promise<Response>{
        if(relationstables.length!=0)
        {   
            const rows = await getRepository(entity).find({relations:relationstables});
            return res.json(rows)
        }
        else if(relationstables.length==0)
        {   
            const rows = await getRepository(entity).find();
            return res.json(rows)
        }
        
        return res.status(404).json({msg: "Not user found"});
    };
    static  async readOne(entity:any,req:Request,res:Response,relationstables:any):Promise<Response>{
        const row:any = await getRepository(entity).findOne(req.params.id,{relations:relationstables});
        row.Number=cryptr.decrypt(row.Number);
        row.IDClient.Password=cryptr.decrypt(row.IDClient.Password);
        return res.json(row);
    };
    static  async readandDecrypt(entity:any,req:Request,res:Response,relationstables:any):Promise<Response>{

        if(relationstables.length!=0)
        {
            var rows:any = await getRepository(entity).find({relations:relationstables});
            for (let index = 0; index < rows.length; index++) {
                rows[index].Number=cryptr.decrypt(rows[index].Number);
            }
            return res.json(rows)
        }
        else if(relationstables.length==0)
        {   
            const rows = await getRepository(entity).find();
            return res.json(rows)
        }
        
        return res.status(404).json({msg: "Not user found"});
    };
    static  async create(entity:any,req:Request,res:Response):Promise<Response>{
        const newRow = getRepository(entity).create(req.body);
        const rowSaved = await getRepository(entity).save(newRow);
        console.log("Guardado",req.body);
        return res.json(rowSaved);
    };
    static  async delete(entity:any,req:Request,res:Response):Promise<Response>{
        const rowDeleted = await getRepository(entity).delete(req.params.id);
         return res.json(rowDeleted);
    };
    static  async update(entity:any,req:Request,res:Response):Promise<Response>{
        const rowObtained:any = await getRepository(entity).findOne(req.params.id);
        if (rowObtained){
            getRepository(entity).merge(rowObtained,req.body);
           const results =  await getRepository(entity).save(rowObtained);
           return res.json(results);
        }
        return res.status(404).json({msg: "Not user found"});
    };
}