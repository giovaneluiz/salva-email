import { CreateDoctorUseCase } from '../src/application/usecases/CreateDoctorUseCase';
import { InMemoryDoctorRepository } from '../src/infra/repositories/InMemoryDoctorRepository';

describe('CreateDoctorUseCase', () => {
    let repository: InMemoryDoctorRepository;
    let useCase: CreateDoctorUseCase;

    beforeEach(() => {
        repository = new InMemoryDoctorRepository();
        useCase = new CreateDoctorUseCase(repository);
    });

    it('should create a doctor', async () => {
        const result = await useCase.execute({
            numCRM: '12345',
            email: 'doctor@example.com'
        });

        expect(result.numCRM).toBe('12345');
        expect(result.email).toBe('doctor@example.com');
    });

    it('should not create a doctor with duplicate email', async () => {
        await useCase.execute({
            numCRM: '12345',
            email: 'doctor@example.com'
        });

        await expect(useCase.execute({
            numCRM: '54321',
            email: 'doctor@example.com'
        })).rejects.toThrow('Email already exists');
    });
});