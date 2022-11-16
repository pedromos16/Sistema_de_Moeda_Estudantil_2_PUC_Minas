package br.com.pucminas.sistemamoedaestudantil.dtos.request;

import br.com.pucminas.sistemamoedaestudantil.entities.Vantagem;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor

public class VantagemRequestDTO {
    Integer id;
    String descricao;
    Double preco;
    String imagem;

<<<<<<< Updated upstream
    public VantagemRequestDTO(Vantagem vantagem){
        this.id = vantagem.getId();
        this.descricao = vantagem.getDescricao();
        this.preco = vantagem.getPreco();
        this.imagem = vantagem.getImagem();
=======
    public VantagemRequestDTO(Vantagem obj){
        this.id = obj.getId();
            this.empresaId = obj.getEmpresa().getId();
        this.valor = obj.getValor();
        this.descricao = obj.getDescricao();
        this.imagem = obj.getImagem();
>>>>>>> Stashed changes
    }

    public Vantagem build(){
        Vantagem vantagem = new Vantagem();
        vantagem.setPreco(this.preco);
        vantagem.setImagem(this.imagem);
        vantagem.setDescricao(this.descricao);
        return vantagem;
    }
}
