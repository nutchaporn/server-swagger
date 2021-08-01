import {getRepository} from "typeorm";
import {NextFunction, Request, Response} from "express";
import {ProductStock} from "../entity/ProductStock";

export class ProductStockController {

    private product_stockRepository = getRepository(ProductStock);

    async all(request: Request, response: Response, next: NextFunction) {
        return this.product_stockRepository.find();
    }

    async one(request: Request, response: Response, next: NextFunction) {
        return this.product_stockRepository.findOne(request.params.id);
    }

    async save(request: Request, response: Response, next: NextFunction) {
        return this.product_stockRepository.save(request.body);
    }

    async remove(request: Request, response: Response, next: NextFunction) {
        let userToRemove = await this.product_stockRepository.findOne(request.params.id);
        await this.product_stockRepository.remove(userToRemove);
    }

}