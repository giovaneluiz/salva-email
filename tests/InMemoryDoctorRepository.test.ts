import { InMemoryDoctorRepository } from '../src/infra/repositories/InMemoryDoctorRepository';
import { Doctor } from '../src/domain/entities/Doctor';

describe('InMemoryDoctorRepository', () => {
    let repository: InMemoryDoctorRepository;

    beforeEach(() => {
        repository = new InMemoryDoctorRepository();
    });

    it('should save a doctor', async () => {
        const doctor = new Doctor('12345', 'doctor@example.com');
        const savedDoctor = await repository.save(doctor);
        expect(savedDoctor).toEqual(doctor);
    });

    it('should find doctor by email', async () => {
        const doctor = new Doctor('12345', 'doctor@example.com');
        await repository.save(doctor);
        const foundDoctor = await repository.findByEmail('doctor@example.com');
        expect(foundDoctor).toEqual(doctor);
    });

    it('should return null when doctor email is not found', async () => {
        const foundDoctor = await repository.findByEmail('nonexistent@example.com');
        expect(foundDoctor).toBeNull();
    });

    it('should list all doctors', async () => {
        const doctor1 = new Doctor('12345', 'doctor1@example.com');
        const doctor2 = new Doctor('67890', 'doctor2@example.com');
        
        await repository.save(doctor1);
        await repository.save(doctor2);

        const doctors = await repository.findAll();
        
        expect(doctors).toHaveLength(2);
        expect(doctors).toEqual(expect.arrayContaining([doctor1, doctor2]));
    });

    it('should return empty array when no doctors exist', async () => {
        const doctors = await repository.findAll();
        expect(doctors).toHaveLength(0);
        expect(doctors).toEqual([]);
    });

    it('should return a new array instance on each findAll call', async () => {
        const doctor = new Doctor('12345', 'doctor@example.com');
        await repository.save(doctor);

        const firstCall = await repository.findAll();
        const secondCall = await repository.findAll();

        expect(firstCall).toEqual(secondCall);
        expect(firstCall).not.toBe(secondCall); // Verifica se são instâncias diferentes
    });
});