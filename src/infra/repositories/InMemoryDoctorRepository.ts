import { Doctor } from '../../domain/entities/Doctor';
import { DoctorRepository } from '../../domain/repositories/DoctorRepository';

export class InMemoryDoctorRepository implements DoctorRepository {
    private doctors: Doctor[] = [];

    async save(doctor: Doctor): Promise<Doctor> {
        this.doctors.push(doctor);
        return doctor;
    }

    async findByEmail(email: string): Promise<Doctor | null> {
        const doctor = this.doctors.find(d => d.email === email);
        return doctor || null;
    }

    async findAll(): Promise<Doctor[]> {
        return [...this.doctors];
    }
}