function center_video_text(text_id, video_id){
    var $vid = $(text_id);
    var $msg = $(video_id); 
    $msg.css({
        top:$vid.offset().top + (($vid.height()/2) - ($msg.height()/2)),
        left:$vid.offset().left + (($vid.width()/2) - ($msg.width()/2))
    });
}

Template.morePhotos.rendered = function(){
    $(".photo-caro").slick();
};

$(document).ready(function(){
    $(".photo-caro").slick({infinite: true});
});

Template.ourstory.events({
    "click img": function(event, temp){
        console.log("clickedimg");
        $('#photoModal').foundation('reveal', 'open');
    }
});

Template.ourstory.helpers({
    storyBlock: function(header, content){
        var html = '<div class="row storyblock-row">';
        html += '<div class="medium-2 columns circleColumn">';
        html += '<div class="storyCircle"></div></div>';
        html += '<div class="medium-10 columns"><h4>'+header+'</h4>';
        html += '<p class="storyText">'+content+'</p></div></div>';
        return html;
    }
});

Template.SongList.helpers({
    songs: function(){
        return Songs.find();
    }
});

Template.songRequest.events({
    "click #request-song": function(event){
        event.preventDefault();
        var $artist = $("#artist-input");
        var $track = $("#track-input");
        Songs.insert({artist: $artist.val(), track: $track.val()}, function(err, id){
            if(err){
                $(".error-message").show();
            }
            else{
                $(".error-message").hide();
                $(".success-message").show();
                $artist.val('');
                $track.val('');
                setTimeout(function(){$('.success-message').hide()}, 1500);
            }
        });
    }
});
