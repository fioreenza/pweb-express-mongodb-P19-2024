import { Router } from 'express';
import * as mechanismController from '../controllers/mechanism.controller';

const router = Router();

// Route untuk mendapatkan semua mekanisme
router.get('/', async (req, res) => {
    try {
        const mechanisms = await mechanismController.getMechanisms();
        res.status(200).json(mechanisms);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving mechanisms', error });
    }
});

// Route untuk mendapatkan mekanisme tertentu berdasarkan ID
router.get('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const mechanism = await mechanismController.getMechanismById(id);
        if (mechanism) {
            res.status(200).json(mechanism);
        } else {
            res.status(404).json({ message: 'Mechanism not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving mechanism', error });
    }
});

// Route untuk membuat mekanisme baru
router.post('/', async (req, res) => {
    const data = req.body;
    try {
        const newMechanism = await mechanismController.createMechanism(data);
        res.status(201).json(newMechanism);
    } catch (error) {
        res.status(500).json({ message: 'Error creating mechanism', error });
    }
});

// Route untuk memperbarui mekanisme
router.put('/:id', async (req, res) => {
    const { id } = req.params;
    const data = req.body;
    try {
        const updatedMechanism = await mechanismController.updateMechanism(id, data);
        if (updatedMechanism) {
            res.status(200).json(updatedMechanism);
        } else {
            res.status(404).json({ message: 'Mechanism not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error updating mechanism', error });
    }
});

// Route untuk menghapus mekanisme
router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const deletedMechanism = await mechanismController.deleteMechanism(id);
        if (deletedMechanism) {
            res.status(200).json({ message: 'Mechanism deleted successfully', deletedMechanism });
        } else {
            res.status(404).json({ message: 'Mechanism not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error deleting mechanism', error });
    }
});

export default router;
