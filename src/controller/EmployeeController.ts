import {Connection, createConnection, getRepository} from "typeorm";
import {NextFunction, Request, Response} from "express";
import {Employee} from "../entity/Employee";

export class EmployeeController {

    private employeeRepository = getRepository(Employee);

    async all(request: Request, response: Response, next: NextFunction) {
        return this.employeeRepository
        .createQueryBuilder("employee")
        .innerJoinAndSelect("employee.role", "role")
        .getMany();
    }

    async one(request: Request, response: Response, next: NextFunction) {
        return this.employeeRepository
        .createQueryBuilder("employee")
        .innerJoinAndSelect("employee.role", "role")
        .where(`employee.id = ${request.params.id}`)
        .getOne()
    }

    async save(request: Request, response: Response, next: NextFunction) {
        console.log(request.body)
        return this.employeeRepository.save(request.body);
    }

    async remove(request: Request, response: Response, next: NextFunction) {
        let userToRemove = await this.employeeRepository.findOne(request.params.id);
        await this.employeeRepository.remove(userToRemove);
    }

}