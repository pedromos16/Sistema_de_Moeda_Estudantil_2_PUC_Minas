package br.com.pucminas.sistemamoedaestudantil.dtos.response;

import br.com.pucminas.sistemamoedaestudantil.entities.Vantagem;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class VantagemResponseDTO {
    
    Integer id;
    String descricao;
    Double preco;
    String imagem;

    public VantagemResponseDTO(Vantagem obj){
        this.descricao = obj.getDescricao();
        this.preco = obj.getPreco();
        this.imagem = obj.getImagem();
    }
}
