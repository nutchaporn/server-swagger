import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class ProductSize {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        length: 50
    })
    name: string;

}
