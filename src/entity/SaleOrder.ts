import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    JoinColumn,
    ManyToOne
} from "typeorm";
import { Action } from "./Action";
import { Status } from "./Status";


@Entity()
export class SaleOrder {

    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(type => Action, action => action.name)
    @JoinColumn()
    action: Action;

    @ManyToOne(type => Status, status => status.name)
    @JoinColumn()
    status: Status;

    @Column()
    createAt: Date;

    @Column()
    dueDate: Date;

    @Column({
        nullable: true
    })
    delivery: Date;

    @Column({
        nullable: true,
        type: "longblob"
    })
    image: String
}
