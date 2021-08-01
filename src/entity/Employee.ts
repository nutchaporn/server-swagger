import {Entity,
        PrimaryGeneratedColumn,
        Column ,
        JoinColumn,
        ManyToOne
    } from "typeorm";
import { Role } from "./Role";

@Entity()
export class Employee {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        length: 50
    })
    firstName: string;

    @Column({
        length: 50
    })
    lastName: string;

    @Column({
        length: 80
    })
    email: string;
    
    @Column()
    address: string;

    @Column({
        length: 13
    })
    idCard: string;

    @Column({
        length: 10
    })
    phone: string;

    @ManyToOne(type => Role, role => role.name)
    @JoinColumn()
    role: Role;

    @Column()
    createAt: Date;
    
    @Column({
        type: "longblob",
        nullable: true
    })
    image: string;
}
