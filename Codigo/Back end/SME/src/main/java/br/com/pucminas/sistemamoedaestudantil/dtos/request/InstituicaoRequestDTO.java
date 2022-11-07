package br.com.pucminas.sistemamoedaestudantil.dtos.request;

import br.com.pucminas.sistemamoedaestudantil.entities.Instituicao;
import br.com.pucminas.sistemamoedaestudantil.entities.Professor;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class InstituicaoRequestDTO {
    String nome;

    String cnpj;


    public InstituicaoRequestDTO(Instituicao instituicao){
        this.nome = instituicao.getNome();
        this.cnpj = instituicao.getCnpj();
    }

    public Instituicao build(){
        Instituicao instituicao = new Instituicao();
        instituicao.setNome(this.nome);
        instituicao.setCnpj(this.cnpj);
        return instituicao;
    }
}
