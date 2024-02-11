export class Task {
    id: string;
    description: string = '';
    state: string = '';

    constructor() {
        this.id = ""; // Opcional: Puedes mantener la inicialización si lo prefieres, pero json-server sobrescribirá este valor.
    }
}
