Vue.config.devtools = true;

var app = new Vue(
    {
        el: '#root',
        data: {
            selected: '',
            songs: []
        },
        methods: {
            changeGenre: function() {

            }
        },
        mounted() {
            axios
                .get('https://flynn.boolean.careers/exercises/api/array/music')
                .then((response) => {
                    this.songs = response.data.response;
            });
        }
    }
);
