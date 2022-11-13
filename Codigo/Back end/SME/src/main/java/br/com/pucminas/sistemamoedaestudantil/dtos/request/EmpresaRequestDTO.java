package br.com.pucminas.sistemamoedaestudantil.dtos.request;

import br.com.pucminas.sistemamoedaestudantil.entities.Empresa;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class EmpresaRequestDTO {

    private Integer id;
    private String nome;
    private String email;
    private String senha;
    private String cnpj;
    private double saldo;

    public EmpresaRequestDTO(Empresa obj){
        this.nome = obj.getNome();
        this.email = obj.getEmail();
        this.senha = obj.getSenha();
        this.cnpj = obj.getCnpj();
        this.saldo = obj.getSaldo();
        this.id = obj.getId();
    }

    public Empresa build(){
        Empresa obj = new Empresa();
        obj.setNome(this.nome);
        obj.setEmail(this.email);
        obj.setCnpj(this.cnpj);
        obj.setSaldo(this.saldo);
        obj.setSenha(this.senha);
        return obj;
    }
}
