import { uuid } from 'uuidv4';

interface AppointmentContructor {
    provider: string,
    date: Date;
}

class Appointment {
    id: string;

    provider: string;

    date: Date;

    //Omit para omitir o id dentro do construtor
    constructor({provider, date}: Omit<Appointment, 'id'>) {
        this.id = uuid();
        this.provider = provider;
        this.date = date;
    }
}

export default Appointment;