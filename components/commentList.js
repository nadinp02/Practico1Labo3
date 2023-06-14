app.component('comment-list', {
    props: {
        user:{
            type:String,
            required:true
        },
        userComment:{
            type:Array,
            required:true
        }
        
    },
    template:/*html*/
    `   <div class="new-coments">
    <form class="comment-form" @submit.prevent="onSubmit">
        <input class="coment" id="comment" v-model="comment" type="text" :placeholder="placeholder">
        <button class="button btn-coment" id="comment" type="Submit">Comentar</button>
    </form>
        <div class="col d-flex justify-content "> 
            <div class="alert alert-danger p-2 m-2" v-if="loged">Ingrese un nombre de usuario</div>
            <div class="alert alert-danger p-2 m-2" v-if="commented">Error! Escribe un comentario</div>
        </div>
        </div>`,
        
        data(){
            return{
                comment:'',
                placeholder:'Deja tu comentario',
                loged: '',
                commented:'',

            }
        },
        methods:{
            //* AGREGAR COMENTARIO *//
            onSubmit() {
                    if (this.user === '') {
                        this.loged = true;
                        setTimeout(() => {
                          this.loged = false;
                        }, 2000);
                        return; 
                      }
                    
                      if (this.comment === '') {
                        this.commented = true;
                        setTimeout(() => {
                          this.commented = false;
                        }, 2000);
                        return; 
                      }
                      let userComment = {
                          name: this.user,
                          comment: this.comment
                        };
                        this.$emit('submit-comment', userComment);
                        this.name = '';
                        this.comment = '';      
            
              }
             
        }
    
})
