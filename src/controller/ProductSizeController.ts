import {getRepository} from "typeorm";
import {NextFunction, Request, Response} from "express";
import {ProductSize} from "../entity/ProductSize";

export class ProductSizeController {

    private product_sizeRepository = getRepository(ProductSize);

    async all(request: Request, response: Response, next: NextFunction) {
        return this.product_sizeRepository.find();
    }

    async one(request: Request, response: Response, next: NextFunction) {
        return this.product_sizeRepository.findOne(request.params.id);
    }

    async save(request: Request, response: Response, next: NextFunction) {
        return this.product_sizeRepository.save(request.body);
    }

    async remove(request: Request, response: Response, next: NextFunction) {
        let userToRemove = await this.product_sizeRepository.findOne(request.params.id);
        await this.product_sizeRepository.remove(userToRemove);
    }

}