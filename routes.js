Router.route('/', function(){
    this.render("Home");
});

Router.route('/songs', function(){
    this.render("SongList");
});

Router.route('/rsvp', function(){
    this.render("RsvpList");
});
