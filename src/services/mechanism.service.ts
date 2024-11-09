// Data mekanisme yang disimpan dalam memori (array)
let mechanisms = [
    { id: '1', name: 'Mechanism 1', description: 'Description 1' },
    { id: '2', name: 'Mechanism 2', description: 'Description 2' },
    // Data lainnya
];

// Get all mechanisms
export const getMechanisms = async () => {
    return mechanisms; // Mengembalikan semua mekanisme dari array
};

// Get mechanism by ID
export const getMechanismById = async (id: string) => {
    return mechanisms.find(mechanism => mechanism.id === id); // Mencari mekanisme berdasarkan ID
};

// Create a new mechanism
export const createMechanism = async (data: any) => {
    const newMechanism = { 
        id: (mechanisms.length + 1).toString(), // Membuat ID unik baru
        ...data // Menambahkan data yang diterima
    };
    mechanisms.push(newMechanism); // Menambahkan mekanisme baru ke array
    return newMechanism; // Mengembalikan mekanisme yang baru dibuat
};

// Update a mechanism
export const updateMechanism = async (id: string, data: any) => {
    let updatedMechanism = mechanisms.find(mechanism => mechanism.id === id);
    if (updatedMechanism) {
        updatedMechanism = { ...updatedMechanism, ...data }; // Memperbarui data mekanisme
        mechanisms = mechanisms.map(mechanism =>
            mechanism.id === id ? updatedMechanism : mechanism
        ); // Memperbarui array dengan mekanisme yang diperbarui
    }
    return updatedMechanism; // Mengembalikan mekanisme yang sudah diperbarui
};

// Delete a mechanism
export const deleteMechanism = async (id: string) => {
    const index = mechanisms.findIndex(mechanism => mechanism.id === id);
    if (index !== -1) {
        const deletedMechanism = mechanisms.splice(index, 1); // Menghapus mekanisme dari array
        return deletedMechanism[0]; // Mengembalikan mekanisme yang dihapus
    }
    return null; // Jika tidak ditemukan
};
