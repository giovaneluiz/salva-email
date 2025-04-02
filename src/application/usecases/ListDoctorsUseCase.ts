import { Doctor } from '../../domain/entities/Doctor';
import { DoctorRepository } from '../../domain/repositories/DoctorRepository';

export class ListDoctorsUseCase {
    constructor(private readonly doctorRepository: DoctorRepository) {}

    async execute(): Promise<Doctor[]> {
        return this.doctorRepository.findAll();
    }
}