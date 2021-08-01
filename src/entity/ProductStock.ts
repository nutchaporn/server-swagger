import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    JoinColumn,
    ManyToMany
} from "typeorm";
import { Product } from "./Product";

@Entity()
export class ProductStock {

    @PrimaryGeneratedColumn()
    id: number;

    @ManyToMany(type => Product)
    @JoinColumn()
    product: Product;

    @Column()
    unit: number;
}
