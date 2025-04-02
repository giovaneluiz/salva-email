import { Doctor } from '../entities/Doctor';

export interface DoctorRepository {
    save(doctor: Doctor): Promise<Doctor>;
    findByEmail(email: string): Promise<Doctor | null>;
    findAll(): Promise<Doctor[]>;
}