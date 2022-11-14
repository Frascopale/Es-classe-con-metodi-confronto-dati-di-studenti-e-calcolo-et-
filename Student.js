let Student = class {
    constructor(nome, cognome, nascita, hobby, motto) {
        this.nome = nome;
        this.cognome = cognome;
        this.nascita = nascita;
        this.hobby = hobby;
        this.motto = motto;

    }

    getAge() {
        let data = new Date();
        this.nascita = new Date(this.nascita)
        let eta = (data.getFullYear() - this.nascita.getFullYear());
        if (data.getMonth() < this.nascita.getMonth() ||
            data.getMonth() == this.nascita.getMonth() && data.getDate() < this.nascita.getDate()) {
            eta--;
        }
        return console.log(this.nome + " ha " + eta + " anni.")
    }

    getMotto() {
        return console.log("Il motto di " + this.nome + " è " + this.motto)
    }

    compareAge(alunnoa, alunnob) {
        return alunnoa.getAge() > alunnob.getAge()
    }

    compareHobby(alunnoa, alunnob) {
        return alunnoa.hobby == alunnob.hobby
    }
}



module.exports = Student;

