package br.com.pucminas.sistemamoedaestudantil.entities;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.MappedSuperclass;
import java.io.Serializable;

@MappedSuperclass
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Compra extends Usuario implements Serializable {
    private static final long SerialVersionUID = 3218241341L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Integer id;


}
