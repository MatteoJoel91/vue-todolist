const root = new Vue (
    {
        el: "#root",
        data: {
            newtodo: '',
            done: false,
            todos: [
                {
                    text: 'studiare',
                    done: false,
                },
                {
                    text: 'mangiare',
                    done: false,
                },
                {
                    text: 'giocare',
                    done: false,
                },
                {
                    text: 'dormire',
                    done: false,
                },
            ]
        },

      
        methods: {
            addTodo(){
                if (this.newtodos != '') {
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
           todoFatta(){
            this.done = !this.done;
           },        
        }
    }  
);
