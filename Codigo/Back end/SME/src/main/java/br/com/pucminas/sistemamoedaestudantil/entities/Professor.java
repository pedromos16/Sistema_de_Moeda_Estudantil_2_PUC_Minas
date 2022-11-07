package br.com.pucminas.sistemamoedaestudantil.entities;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import java.io.Serializable;
@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor

public class Professor extends Usuario implements Serializable {
    private static final long SerialVersionUID = 37995113L;

    String cpf;
    Double moedas;

}
