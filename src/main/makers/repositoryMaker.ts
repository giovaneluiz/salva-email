import { InMemoryDoctorRepository } from '../../infra/repositories/InMemoryDoctorRepository';
import { DoctorRepository } from '../../domain/repositories/DoctorRepository';

export class RepositoryMaker {
    private static instance: RepositoryMaker;
    private doctorRepository: DoctorRepository;

    private constructor() {
        this.doctorRepository = new InMemoryDoctorRepository();
    }

    public static getInstance(): RepositoryMaker {
        if (!RepositoryMaker.instance) {
            RepositoryMaker.instance = new RepositoryMaker();
        }
        return RepositoryMaker.instance;
    }

    public makeDoctorRepository(): DoctorRepository {
        return this.doctorRepository;
    }
}