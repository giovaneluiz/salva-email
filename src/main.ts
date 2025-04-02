import express from 'express';
import { DoctorController } from './presentation/controllers/DoctorController';
import { CreateDoctorUseCase } from './application/usecases/CreateDoctorUseCase';
import { ListDoctorsUseCase } from './application/usecases/ListDoctorsUseCase';
import { InMemoryDoctorRepository } from './infra/repositories/InMemoryDoctorRepository';

const app = express();
app.use(express.json());

// Dependency Injection
const doctorRepository = new InMemoryDoctorRepository();
const createDoctorUseCase = new CreateDoctorUseCase(doctorRepository);
const listDoctorsUseCase = new ListDoctorsUseCase(doctorRepository);
const doctorController = new DoctorController(createDoctorUseCase, listDoctorsUseCase);

// Routes
app.post('/doctors', (req, res) => doctorController.create(req, res));
app.get('/doctors', (req, res) => doctorController.list(req, res));

const PORT = process.env.PORT || 3333;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
