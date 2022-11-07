package br.com.pucminas.sistemamoedaestudantil.entities;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.io.Serializable;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Curso implements Serializable {
    private static final long SerialVersionUID = 321637213L;
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private String nome;

}
