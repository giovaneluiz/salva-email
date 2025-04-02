import { Doctor } from '../src/domain/entities/Doctor';

describe('Doctor', () => {
    it('should create a doctor with valid email', () => {
        const doctor = new Doctor('12345', 'doctor@example.com');
        expect(doctor.numCRM).toBe('12345');
        expect(doctor.email).toBe('doctor@example.com');
    });

    it('should throw error when email is invalid', () => {
        expect(() => new Doctor('12345', 'invalid-email')).toThrow('Invalid email');
    });
});