const fs = require('fs');
const { exec } = require('child_process');
const os = require('os');

class Pessoa {
    constructor(nome, idade, celular, email, endereco) {
        this.Nome = nome;
        this.Idade = idade;
        this.Celular = celular;
        this.Email = email;
        this.Endereco = endereco;
    }
}

class Endereco {
    constructor(logradouro, numero, cep, bairro, cidade, estado) {
        this.Logradouro = logradouro;
        this.Numero = numero;
        this.Cep = cep;
        this.Bairro = bairro;
        this.Cidade = cidade;
        this.Estado = estado;
    }
}

class Cliente {
    constructor(nomeDeContatoDeEmergencia, contatoDeEmergencia, comoClienteFicouSabendoDaAcademia, person) {
        this.NomeDeContatoDeEmergencia = nomeDeContatoDeEmergencia;
        this.ContatoDeEmergencia = contatoDeEmergencia;
        this.ComoClienteFicouSabendoDaAcademia = comoClienteFicouSabendoDaAcademia;
        this.Person = person;
    }
}

const cliente = new Cliente(
    "Maria",
    "5674-5899",
    "INSTAGRAM",
    new Pessoa(
        "Arthur",
        23,
        "1198675-4570",
        "arthur@hotmail.com",
        new Endereco(
            "Rua Marfin joão",
            "34",
            "04475-580",
            "Jardim das Naçoes",
            "São Paulo",
            "SP"
        )
    )
);

const json = JSON.stringify(cliente, null, 2);

const arquivoTemporario = `${os.tmpdir()}/CadastroCliente.json`;

fs.writeFile(arquivoTemporario, json, (err) => {
    if (err) {
        console.error("Ocorreu um erro ao tentar escrever no arquivo:");
        console.error(err);
        return;
    }

    exec(`notepad.exe ${arquivoTemporario}`, (error, stdout, stderr) => {
        if (error) {
            console.error(`Ocorreu um erro ao tentar abrir o arquivo: ${error.message}`);
            return;
        }
        if (stderr) {
            console.error(`stderr: ${stderr}`);
            return;
        }
    });
});