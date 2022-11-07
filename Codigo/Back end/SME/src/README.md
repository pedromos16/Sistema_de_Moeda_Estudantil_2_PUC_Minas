# Mapeamento do CRUD de entidades

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

___________________________________________

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

___________________________________________

## Instituicao "/api/instituicao"

### Get by Id

requisição: /api/instituicao/mostrar/id/{id}

### Get all

requisição: /api/instituicao/listar

### Insert

requisição: /api/instituicao/cadastrar

exemplo de corpo:{

    "nome": "Faculdade Estrela",

    "cnpj": "32895379812"

}

### Delete by id

requisição /api/instituicao/deletar/id/{id}

### Update by id

requisição /api/instituicao/update/id/{id}

exemplo de corpo:{

     "nome": "Faculdade Estrela do Norte",

    "cnpj": "32895379812"

}

___________________________________________

## Curso "/api/curso"

### Get by Id

requisição: /api/curso/mostrar/id/{id}

### Get all

requisição: /api/curso/listar

### Insert

requisição: /api/curso/cadastrar

exemplo de corpo:{

    "nome": "Agronomia"

}

### Delete by id

requisição /api/curso/deletar/id/{id}

### Update by id

requisição /api/curso/update/id/{id}

exemplo de corpo:{

     "nome": "Engenharia de grãos"


}

}
}