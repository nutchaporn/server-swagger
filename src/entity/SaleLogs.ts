import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    OneToOne,
    JoinColumn,
    ManyToOne
} from "typeorm";
import { Action } from "./Action";
import { Employee } from "./Employee";
import { Product } from "./Product";


@Entity()
export class SaleLog {

    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(type => Employee)
    @JoinColumn()
    employee: Employee;

    @ManyToOne(type => Product)
    @JoinColumn()
    product: Product;

    @ManyToOne(type => Action, action => action.name)
    @JoinColumn()
    action: Action;

    @Column()
    description: String;

    @Column({
        type: "float"
    })
    price: number;

    @Column()
    careteAt: Date;
}
