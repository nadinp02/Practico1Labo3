app.component('comment-form', {
    props: {
        comments:{
            type:Array,
            required:true
        },
        user:{
            type:String,
            required:true
        }
    },

    template:
    /*html*/
    ` <div class="row comentarios mb-1"  v-for="(comment, index) in comments" :key="index" > 
        <div class="col-9 m-1 mb-1">
        <b class="me-2 fw-bold text-primary"> {{ comment.name }}</b> <span>{{ comment.comment }}</span> 
        </div>
        <div class="col d-flex justify-content-end "> 
            <button class="btn-borrar p-2" id="eliminar" @click="eliminar(comment)">Eliminar</button>
        </div>
        </div>`,

    methods:{
        //* ELIMINAR COMENTARIO *//
        eliminar(comment){
            const index = this.comments.indexOf(comment);
            if (index !== -1){
                this.comments.splice(index, 1);
            }
        }
    }
})
    