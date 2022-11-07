package br.com.pucminas.sistemamoedaestudantil.dtos.request;

import br.com.pucminas.sistemamoedaestudantil.entities.Aluno;
import br.com.pucminas.sistemamoedaestudantil.entities.Professor;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor

public class ProfessorRequestDTO {
    String nome;
    String email;
    String senha;
    String cpf;
    Double moedas;

    public ProfessorRequestDTO(Professor professor){
        this.email = professor.getEmail();
        this.nome = professor.getNome();
        this.senha = professor.getSenha();
        this.moedas = professor.getMoedas();
        this.cpf = professor.getCpf();
    }

    public Professor build(){
        Professor professor = new Professor();
        professor.setNome(this.nome);
        professor.setEmail(this.email);
        professor.setSenha(this.senha);
        professor.setMoedas(this.moedas);
        professor.setCpf(this.cpf);
        return professor;
    }
}
