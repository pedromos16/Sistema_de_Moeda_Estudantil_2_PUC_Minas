package br.com.pucminas.sistemamoedaestudantil.dtos.response;

import br.com.pucminas.sistemamoedaestudantil.entities.Empresa;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class EmpresaResponseDTO {
    private String nome;
    private String email;
    private String senha;
    private String cnpj;
    private double saldo;

    public EmpresaResponseDTO(Empresa obj){
        this.nome = obj.getNome();
        this.email = obj.getEmail();
        this.senha = obj.getSenha();
        this.cnpj = obj.getCnpj();
        this.saldo = obj.getSaldo();
    }
}
