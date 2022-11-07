package br.com.pucminas.sistemamoedaestudantil.dtos.request;


import br.com.pucminas.sistemamoedaestudantil.entities.Transacao;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class TransacaoRequestDTO {

    Integer alunoId;

    Integer professorId;

    double valor;

    public TransacaoRequestDTO(Transacao obj){
        this.alunoId = obj.getAluno().getId();
        this.professorId = obj.getProfessor().getId();
        this.valor = obj.getValor();
    }
}
