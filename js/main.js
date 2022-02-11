/* Descrizione: Rifare l'esercizio della to do list.
Questa volta però ogni todo sarà un oggetto, formato da due proprietà:
- text, una stringa che indica il testo del todo
 - done, un booleano (true/false) che indica se il todo è stato fatto oppure no 
MILESTONE 1 
Stampare all'interno di una lista, un item per ogni todo. Se la proprietà done è uguale a true, visualizzare il testo del todo sbarrato.
MILESTONE 2 
Visualizzare a fianco ad ogni item ha una "x": cliccando su di essa, il todo viene rimosso dalla lista.
MILESTONE 3 
Predisporre un campo di input testuale e un pulsante "aggiungi": cliccando sul pulsante, il testo digitato viene letto e utilizzato per creare un nuovo todo, che quindi viene aggiunto alla lista dei todo esistenti. 
Bonus: 
1- oltre al click sul pulsante, intercettare anche il tasto ENTER per aggiungere il todo alla lista
2- cliccando sul testo dell'item, invertire il valore della proprietà done del todo corrispondente (se done era uguale a false, impostare true e viceversa) */

// inizializzo Vue e creo un arrey di oggetti con 2 valori
const root = new Vue (
    {
        el: "#root",
        data: {
            newtodo: '',
            todos: [
                {
                    text: 'Studiare',
                    done: false,
                },
                {
                    text: 'Mangiare',
                    done: false,
                },
                {
                    text: 'Giocare',
                    done: false,
                },
                {
                    text: 'Dormire',
                    done: false,
                },
            ]
        },

        // funzioni
        methods: {

            // funzione per aggiungere una nuova todo
            addTodo(){
                if (this.newtodo != '') {
                    this.todos.push(
                        {
                            text: this.newtodo,
                            done: false,
                        }
                    );
                    this.newtodo = '';
                }              
            },

            // funzione per rimuovere una tdo tramite la X
            removeTodo(indice){
                this.todos.splice(indice, 1);
            },

            // funzione per cambiare il valore della todo in true e viceversa al click,
            // facendo riferimento all'indice dell'arrey ottunuto tramive il v-for in index
            todoFatta(indice){
                this.todos[indice].done = !this.todos[indice].done;
            },        
        }
    }  
);
