import {getRepository} from "typeorm";
import {NextFunction, Request, Response} from "express";
import {SaleLog} from "../entity/SaleLogs";

export class SaleLogController {

    private sale_logRepository = getRepository(SaleLog);

    async all(request: Request, response: Response, next: NextFunction) {
        return this.sale_logRepository.find();
    }

    async one(request: Request, response: Response, next: NextFunction) {
        return this.sale_logRepository.findOne(request.params.id);
    }

    async save(request: Request, response: Response, next: NextFunction) {
        return this.sale_logRepository.save(request.body);
    }

}