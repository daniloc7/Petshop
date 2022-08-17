import http from "../http-common";


//criar campo de busca
class PetDataService {

    getPets() {
        return http.get(`/pets`);
    }
    getPetsByNome(nome) {
        return http.get(`/pets?nome=${nome}`);
    }

    getPet(id) {
        return http.get(`/pets/${id}`);
    }

    createPet(data) {
        return http.post("/addpet", data);
    }

    updatePet(data) {
        return http.put("/pets", data);
    }

    deletePet(id) {
        return http.delete(`/pets/${id}`);
    }

    findByNome(data) {
        return http.get(`/pets?nome=${data}`);
    }

    // associrPet()

    // export default { getPets, getPet, createPet, updatePet, deletePet,findByNome };
}
export default new PetDataService;