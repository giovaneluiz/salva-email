import { Doctor } from '../../domain/entities/Doctor';
import { DoctorRepository } from '../../domain/repositories/DoctorRepository';

export class CreateDoctorUseCase {
    constructor(private readonly doctorRepository: DoctorRepository) {}

    async execute(input: CreateDoctorInput): Promise<Doctor> {
        const existingDoctor = await this.doctorRepository.findByEmail(input.email);
        if (existingDoctor) {
            throw new Error('Email already exists');
        }

        const doctor = new Doctor(input.numCRM, input.email);
        return this.doctorRepository.save(doctor);
    }
}

type CreateDoctorInput = {
    numCRM: string;
    email: string;
}