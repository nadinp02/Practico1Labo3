app.component('post-display', {

    template:
        /*html*/
        `
        <div class="col-xs-12 col-sm-12 col-lg-8">
        <div class="post-display">
 
                    <div class="card post-card">
                        <h5>{{ post }}</h5>
                        <img src="./assets/img/post.jpg" alt="logo">
                        <div class="likes">
                            <button class="btn-like" id="btn-like" @click="like">Me gusta</button>
                            <p class="likes"><b id="likes-counter">{{ likes }}</b> Likes</p>
                        </div>
    
                        <comment-list v-if="comments.length" :comments="comments"></comment-list>
                        <comment-form @comment-submitted="addComment"></comment-form>
    
                    </div>
                </div>
    </div>


    `,
    data() {
        return {
            post: 'Publicado hace 1 semana',
            image: './assets/img/post.jpg',
            likes: 200,
            liked: false,
            comments:[]


        }
    },
    methods: {
        like() {
            if (!this.liked) {
                this.likes++;
                this.liked = true;
            } else {
                this.likes--;
                this.liked = false;
            }
        },
        addComment(comment) {
            this.comments.push(comment)
        }

    },



})