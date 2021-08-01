import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    OneToOne,
    JoinColumn
} from "typeorm";
import { Employee } from "./Employee";

@Entity()
export class EmployeeStore {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        length: 80
    })
    storeName: String;

    @Column({
        length: 10
    })
    storePhone: String;

    @OneToOne(type => Employee)
    @JoinColumn()
    employee: Employee;

}
