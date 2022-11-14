package br.com.pucminas.sistemamoedaestudantil.entities;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Empresa extends Usuario implements Serializable {
    private static final long SerialVersionUID = 3298741341L;

    String cnpj;
    Double saldo;
    @OneToMany
    @JoinColumn(name = "empresa")
    private Set<Vantagem> vantagems = new HashSet<>();

    public void addVantagem(Vantagem obj)
    {
        vantagems.add(obj);
    }

}
