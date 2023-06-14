app.component('profile-display', {

    template:
        /*html*/
        `
        <div class="profile-display">
        <div class="col-12 ">
        <div class="card">
            <div class="outer">
                <div class="profile">
                    <img src="./assets/img/profile-photo.jpg" alt="logo">
                </div>
                <div class="cv">
                    <ul>
                        <h4><b>{{ title }}</b></h4>
                        <li><b>Email: </b>{{ email }}</li>
                        <li><b>Fecha de nacimiento: </b>{{ bday }}</li>
                        <li><b>Teléfono: </b>{{ phone }}</li>
                        <li><b>Ciudad: </b>{{ city }}</li>
                        <li>Trabajando en <b>{{ description }}</b></li>
                    </ul>
                </div>
                <div class="follow">
                    <button class="btn-follow" @click="follow">{{btnFollow}}</button>
                </div>
            </div>

        </div>
    </div>
    </div>
    `,
    data() {
        return {
            title: 'Jane Doe',
            email: 'jane_doe@email.com',
            bday: '01/05/1996',
            phone: '918-936-9585',
            city: 'Tokyo, Japon',
            description:'Lawn N',
            image: './assets/images/profile-photo.jpg',
            btnFollow: 'Seguir',
            user: ''
        }
    },
    methods: {
        //* BOTÓN SEGUIR *//
        follow() {
            if (this.btnFollow === 'Seguir') {
                this.btnFollow = 'Dejar de seguir';
            } else {
                this.btnFollow = 'Seguir';
            }
        },
    },
})