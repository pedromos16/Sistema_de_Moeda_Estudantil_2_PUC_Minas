package br.com.pucminas.sistemamoedaestudantil.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Set;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Aluno extends Usuario implements Serializable {
    private static final long SerialVersionUID = 329877213L;

    String rg;
    String cpf;
    String endereco;
    Double saldo;

    @OneToMany
    @JoinColumn(name = "aluno_id")
    @JsonIgnore
    private Set<Transacao> transacoes;
}
