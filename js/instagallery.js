/*
* @author: Pietro Cinaglia
* GitHub: https://github.com/pietrocinaglia
* Linkedin: https://linkedin.com/in/pietrocinaglia
*/

//Works only with PUBLIC profile
var instagram_url = "https://www.instagram.com/pietro.cinaglia";
$.ajax({
    type: 'GET',
    url: instagram_url,
    success: function (data) {
        data = JSON.parse(data.split("window._sharedData = ")[1].split(";<\/script>")[0]).entry_data.ProfilePage[0].graphql;
        var feed = data.user.edge_owner_to_timeline_media.edges;
        $.each(feed, function (i, item) {
            $('#gallery').append('<div class="gallery-item"><figure><img class="gallery-item__img" src="' + item.node.thumbnail_resources[4].src + '" alt="" /></figure><div class="gallery-item__overlay"><p class="gallery-item__title">' + item.node.edge_media_to_caption.edges[0].node.text + '</p></div></div>');
        });
    }
})
