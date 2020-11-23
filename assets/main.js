Vue.config.devtools = true;

var app = new Vue(
    {
        el: '#root',
        data: {
            selected: '',
            songs: [],
            filteredGenre: []
        },
        mounted() {
            axios.get('https://flynn.boolean.careers/exercises/api/array/music').then((response) => {
                this.songs = response.data.response;
                this.songs.forEach((song) => {
                    if (!this.filteredGenre.includes(song.genre)) {
                        this.filteredGenre.push(song.genre);
                    }
                });
                this.songs.sort((a, b) => {
                    if (a.year > b.year) {
                        return 1;
                    } else {
                        return -1;
                    }
                })
            });
        }
    }
);
