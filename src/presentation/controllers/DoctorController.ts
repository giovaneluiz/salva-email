import { Request, Response } from 'express';
import { CreateDoctorUseCase } from '../../application/usecases/CreateDoctorUseCase';
import { ListDoctorsUseCase } from '../../application/usecases/ListDoctorsUseCase';

export class DoctorController {
    constructor(
        private readonly createDoctorUseCase: CreateDoctorUseCase,
        private readonly listDoctorsUseCase: ListDoctorsUseCase
    ) { }

    async create(req: Request, res: Response): Promise<Response> {
        try {
            const { numCRM, email } = req.body;
            const doctor = await this.createDoctorUseCase.execute({ numCRM, email });
            return res.status(201).json(doctor);
        } catch (error) {
            if (error instanceof Error) {
                return res.status(400).json({ error: error.message });
            }
            return res.status(400).json({ error: 'An unexpected error occurred' });
        }
    }

    async list(req: Request, res: Response): Promise<Response> {
        try {
            const doctors = await this.listDoctorsUseCase.execute();
            return res.status(200).json(doctors);
        } catch (error) {
            if (error instanceof Error) {
                return res.status(400).json({ error: error.message });
            }
            return res.status(400).json({ error: 'An unexpected error occurred' });
        }
    }
}
