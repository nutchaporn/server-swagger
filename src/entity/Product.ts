import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    JoinColumn,
    ManyToOne
} from "typeorm";
import { ProductSize } from "./ProductSize";
import { ProductType } from "./ProductType";

@Entity()
export class Product {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        type: "float"
    })
    price: number;

    @ManyToOne(Type => ProductSize, size => size.name)
    @JoinColumn()
    size: ProductSize;

    @ManyToOne(Type => ProductType, type => type.name)
    @JoinColumn()
    type: ProductType;

    @Column()
    description: String;

    @Column({
        type: "longblob",
        nullable: true
    })
    image: string;
}
