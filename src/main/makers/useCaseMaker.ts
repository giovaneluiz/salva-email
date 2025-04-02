import { CreateDoctorUseCase } from '../../application/usecases/CreateDoctorUseCase';
import { ListDoctorsUseCase } from '../../application/usecases/ListDoctorsUseCase';
import { RepositoryMaker } from './repositoryMaker';

export class UseCaseMaker {
    private static instance: UseCaseMaker;
    private repositoryMaker: RepositoryMaker;

    private constructor() {
        this.repositoryMaker = RepositoryMaker.getInstance();
    }

    public static getInstance(): UseCaseMaker {
        if (!UseCaseMaker.instance) {
            UseCaseMaker.instance = new UseCaseMaker();
        }
        return UseCaseMaker.instance;
    }

    public makeCreateDoctorUseCase(): CreateDoctorUseCase {
        return new CreateDoctorUseCase(
            this.repositoryMaker.makeDoctorRepository()
        );
    }

    public makeListDoctorsUseCase(): ListDoctorsUseCase {
        return new ListDoctorsUseCase(
            this.repositoryMaker.makeDoctorRepository()
        );
    }
}