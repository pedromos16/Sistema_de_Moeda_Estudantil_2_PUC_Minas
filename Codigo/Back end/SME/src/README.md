# mapeamento do CRUD de entidades

## Aluno "/api/aluno"

### Get by Id

requisição: /api/aluno/mostrar/id/{id}

### Get all

requisição: /api/aluno/listar

### Insert

requisição: /api/aluno/cadastrar

exemplo de corpo:{

    "nome": "Pedro",

    "email":"pedro@gmail.com",

    "senha": "12332",

    "rg": "31278378192312",

    "cpf": "32897137812",

    "endereco": "sla 123",

    "saldo": 59.0

}

### Delete by id

requisição /api/aluno/deletar/id/{id}

___________________________________________

## Empresa

### Get by Id

requisição: /api/Empresa/mostrar/id/{id}

### Get all

requisição: /api/Empresa/listar

### Insert

requisição: /api/Empresa/cadastrar

exemplo de corpo:{

"cnpj": "38213879",

"saldo": 139082812


## Professor "/api/professor"

### Get by Id

requisição: /api/professor/mostrar/id/{id}

### Get all

requisição: /api/professor/listar

### Insert

requisição: /api/professor/cadastrar

exemplo de corpo:{

    "nome": "José",

    "email":"jose@gmail.com",

    "senha": "12332",

    "cpf": "32897137812",

    "moedas": 200.0

}

### Delete by id

requisição /api/professor/deletar/id/{id}

### Update by id

requisição /api/professor/update/id/{id}

exemplo de corpo:{

    "nome": "José Alberto",

    "email":"jose_alberto@gmail.com",

    "senha": "987456",

    "cpf": "32897137812",

    "moedas": 150.0

}

}
}