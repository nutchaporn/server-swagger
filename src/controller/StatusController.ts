import {getRepository} from "typeorm";
import {NextFunction, Request, Response} from "express";
import {Status} from "../entity/Status";

export class StatusController {

    private statusRepository = getRepository(Status);

    async all(request: Request, response: Response, next: NextFunction) {
        return this.statusRepository.find();
    }

    async one(request: Request, response: Response, next: NextFunction) {
        return this.statusRepository.findOne(request.params.id);
    }

    async save(request: Request, response: Response, next: NextFunction) {
        return this.statusRepository.save(request.body);
    }

    async remove(request: Request, response: Response, next: NextFunction) {
        let userToRemove = await this.statusRepository.findOne(request.params.id);
        await this.statusRepository.remove(userToRemove);
    }

}