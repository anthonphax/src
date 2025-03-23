class Usuario {
    constructor(id, name, email, senha, cargo) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.senha = senha;
        this.cargo = cargo;
    }

    acessarSessao() {
        console.log(`${this.name} acessou a sessão.`);
    }

    administrar() {
        console.log(`${this.name} está administrando.`);
    }
}

module.exports = Usuario;