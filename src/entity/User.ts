import { Entity,Column,PrimaryGeneratedColumn, ManyToOne,OneToMany } from "typeorm";
import { CreditCard } from "./CreditCard";
import { UserType } from "./UserType";
@Entity("user")
export class User {
    @PrimaryGeneratedColumn()
    IDUser:number;
    @Column()
    FirstName:string;
    @Column()
    LastName:string;
    @Column()
    Identification: number;
    @ManyToOne(type=>UserType,IDUserType=>IDUserType.users)
    IDUserType: UserType;
    @Column()
    Nickname: string;
    @Column()
    Password: string;
    @OneToMany(type => CreditCard, creditcard => creditcard.IDClient) 
    CreditCards: CreditCard[];
    @Column()
    ModificationDate: Date;
    @Column()
    CreationDate: Date;
}