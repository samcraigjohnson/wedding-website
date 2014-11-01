Router.route('/', function(){
    this.render("Home");
});

Router.route('/songs', function(){
    this.render("SongList");
});
