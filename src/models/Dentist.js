export default class Dentist {
    constructor(id, name, surname, gender, email, country_id, country_name, created_at){
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.gender = gender;
        this.email = email;
        this.country_id = country_id;
        this.country_name = country_name;
        this.created_at = new Date(created_at);
    }
     getCreatedAt(){
        return `${this.created_at.getDate()}/${this.created_at.getMonth()+1}/${this.created_at.getFullYear()}`
    }
}