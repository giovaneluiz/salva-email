import { DoctorController } from '../../presentation/controllers/DoctorController';
import { UseCaseMaker } from './useCaseMaker';

export class ControllerMaker {
    private static instance: ControllerMaker;
    private useCaseMaker: UseCaseMaker;

    private constructor() {
        this.useCaseMaker = UseCaseMaker.getInstance();
    }

    public static getInstance(): ControllerMaker {
        if (!ControllerMaker.instance) {
            ControllerMaker.instance = new ControllerMaker();
        }
        return ControllerMaker.instance;
    }

    public makeDoctorController(): DoctorController {
        return new DoctorController(
            this.useCaseMaker.makeCreateDoctorUseCase(),
            this.useCaseMaker.makeListDoctorsUseCase()
        );
    }
}