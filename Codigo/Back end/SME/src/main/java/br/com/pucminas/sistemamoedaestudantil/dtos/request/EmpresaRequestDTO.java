package br.com.pucminas.sistemamoedaestudantil.dtos.request;

import br.com.pucminas.sistemamoedaestudantil.entities.Empresa;

public class EmpresaRequestDTO {

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
