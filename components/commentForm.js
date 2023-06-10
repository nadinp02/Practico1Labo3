app.component('comment-form', {
    template:
        /*html*/
        `<form class="comment-form" @submit.prevent="onSubmit">
    
<div class="new-coments">
    <input class="coment" id="comment" v-model="comment" placeholder="Deja tu comentario...">
    <input class="button btn-coment" type="button" value="Submit">
    <span id="error-usuario">Por favor, ingrese su nombre de
        usuario.</span>
    <span id="comentario-vacio"> {{ comment.user }} {{ emptyComment }}</span>
</div>
</form>`,
    data() {
        return {
            comment: '',
            emptyComment: '',
            user: ''

        }
    },
    methods: {
        onSubmit() {
            if (this.comment === '') {
                emptyComment = 'Por favor, ingrese un comentario'
                return
            }
            // else if !isset usuario = Por favor, ingrese su nombre de usuario
            let postComment = {
                comment: this.comment,
                nadin: 'usuarioIngresado'
            }
            this.$emit('comment-submitted', postComment)
            this.comment = ''
        }
    }
})