package br.com.pucminas.sistemamoedaestudantil.entities;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;

import javax.persistence.*;

@MappedSuperclass
@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class Vantagem  extends Usuario implements Serializable {

    private static final long SerialVersionUID = 37985213L;
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Integer id;

    String descricao;

    Double preco;

    String imagem;
}
