import { Entity,Column,PrimaryGeneratedColumn, ManyToOne} from "typeorm";
import { User } from "./User";
@Entity("creditcard")
export class CreditCard {
    @PrimaryGeneratedColumn()
    IDCreditCard:number;
    @Column()
    Number:string;
    @Column()
    CardValidationValue:number;
    @ManyToOne(type=>User,idClient=>idClient.CreditCards)
    IDClient: User;
    @Column()
    ModificationDate: Date;
    @Column()
    CreationDate: Date;
}