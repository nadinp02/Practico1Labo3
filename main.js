const app = Vue.createApp({
    data(){
        return{
            
            user: '',
            post: 'Publicado hace 1 semana',
            image: './assets/img/post.jpg',
            likes: 200,
            liked: false,
            comments:[],
            userComment: null,
            
        }
    },
    methods:{

        like() {
            if (!this.liked) {
                this.likes++;
                this.liked = true;
            } else {
                this.likes--;
                this.liked = false;
            }
        },
     
        addComment(comment){
            this.comments.push(comment);
        }
    }
       
})
