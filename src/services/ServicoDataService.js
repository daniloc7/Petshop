import http from "../http-common";

class ServicoDataService {

    getServicos() {
        return http.get("/servicos");
    }

    getDescricaoByNome(descricao) {
        return http.get(`/servicos?descricao=${descricao}`);
    }

    getServico(id) {
        return http.get(`/servicos/${id}`);
    }

    createServico(data) {
        return http.post("/addservico", data);
    }

    updateServico(data) {
        return http.put("/servicos", data);
    }

    deleteServico(id) {
        return http.delete(`/servicos/${id}`);
    }

    // findByNome(data) {
    //     return http.get(`/servicos?descricao=${data}`);
    // }

    // associrPet()

    // export default { getPets, getPet, createPet, updatePet, deletePet,findByNome };
}
export default new ServicoDataService;