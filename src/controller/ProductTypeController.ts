import {getRepository} from "typeorm";
import {NextFunction, Request, Response} from "express";
import {ProductType} from "../entity/ProductType";

export class ProductTypeController {

    private product_typeRepository = getRepository(ProductType);

    async all(request: Request, response: Response, next: NextFunction) {
        return this.product_typeRepository.find();
    }

    async one(request: Request, response: Response, next: NextFunction) {
        return this.product_typeRepository.findOne(request.params.id);
    }

    async save(request: Request, response: Response, next: NextFunction) {
        return this.product_typeRepository.save(request.body);
    }

    async remove(request: Request, response: Response, next: NextFunction) {
        let userToRemove = await this.product_typeRepository.findOne(request.params.id);
        await this.product_typeRepository.remove(userToRemove);
    }

}