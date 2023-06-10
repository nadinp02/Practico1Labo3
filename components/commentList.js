app.component('comment-list', {
    props: {
        comments: {
            type: Array,
            required: true
        }
    },
    template:
        /*html*/
        `
    <div class="coments mt-4" id="comentarios">
    <h4>Comentarios</h4>
    <p><b>Juan Perez</b> ¡Wow, esa foto Tokio es impresionante! <span>&#127751;&#10024;</span></p>
    <p><b>Kathleen J Rennie</b> ¡Esta foto de Tokio es simplemente espectacular! Me trae tantos
        recuerdos</p>
    <p><b>Diana Bell</b> ¡Espero que algun dia pueda ver Tokio en persona!</p>

            <p v-for="(comment, index) in comments" :key="index">
            {{ comment.comment }}
            </p>

    </div>


</div>

    `
})