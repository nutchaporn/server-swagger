import {getRepository} from "typeorm";
import {NextFunction, Request, Response} from "express";
import {SaleOrder} from "../entity/SaleOrder";

export class SaleOrderController {

    private sale_orderRepository = getRepository(SaleOrder);

    async all(request: Request, response: Response, next: NextFunction) {
        return this.sale_orderRepository.find();
    }

    async one(request: Request, response: Response, next: NextFunction) {
        return this.sale_orderRepository.findOne(request.params.id);
    }

    async save(request: Request, response: Response, next: NextFunction) {
        return this.sale_orderRepository.save(request.body);
    }

}