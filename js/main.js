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

      
        methods: {
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
            removeTodo(indice){
                this.todos.splice(indice, 1);
            },
            todoFatta(indice){
                this.todos[indice].done = !this.todos[indice].done;
            },        
        }
    }  
);
