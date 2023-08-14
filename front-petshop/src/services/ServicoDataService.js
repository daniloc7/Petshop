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

}
export default new ServicoDataService;