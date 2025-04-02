import express from 'express';
import { ControllerMaker } from './main/makers/controllerMaker';

const app = express();
app.use(express.json());

// Get controller instance using maker pattern
const doctorController = ControllerMaker.getInstance().makeDoctorController();

// Routes
app.post('/doctors', (req, res) => doctorController.create(req, res));
app.get('/doctors', (req, res) => doctorController.list(req, res));

const PORT = process.env.PORT || 3333;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
