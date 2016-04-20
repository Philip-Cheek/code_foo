
$(document).ready(function(){
	var rest_api = ['http://ign-apis.herokuapp.com/','?startIndex=30\u0026count='];
	var art_req = rest_api.join('articles');
	var vid_req = rest_api.join('videos')

	//page builder may take our API parameters
	var page_builder = function(rest, type, dest_id, count){
		var dest_div = '#' + dest_id
		var url = rest + count.toString();

		//we query the url directly
		$.get(url, function(res) {
			var title;
			var sub_title;
			var cut;
			var list_entry;

			//a string may only be so long
			var too_long = function(string, cut){
				if (string.length > cut){
					while (!string[cut].match(/[a-z]/i)){
						cut -= 1;
					};

					string = string.slice(0,cut) + "..."
				}
				return string;
			};

			//now we iterate through our data and build our html
            for (var i = 0; i < res.data.length; i ++){
            	list_entry = "<a href = 'http://www.ign.com/";
            	var x = i + 1;

            	//data differs a tad depending on its type
            	if (type == "video"){
            		var d_id = "v" + x.toString(); 
            		list_entry += "videos/";
            		list_entry += res.data[i].metadata.url + "'>";
            		title = res.data[i].metadata.name;
            		sub_title = res.data[i].metadata.description;
            		var duration = res.data[i].metadata.duration;
            		cut = 42;
            	}else if (type == "article"){
            		//we have to build our href manually for articles
            		var d_id = "a" + x.toString(); 
            		list_entry += "articles/"
            		var date = res.data[i].metadata.publishDate.split('T')[0].replace(/-/g,'/')
            		list_entry += date + res.data[i].metadata.slug + "'>"
            		title = res.data[i].metadata.headline
            		sub_title = res.data[i].metadata.subHeadline
            		cut = 50;
            	};

            	//these ID's are going to be key for some of our jQuery effects,
            	list_entry += "<div class = 'd_list' id='" + d_id + "'>";

            	//prepend '0' for integers under 10
            	if (x < 10){
            		x = "0" + x.toString();
            	}else{
            		x = x.toString();
            	}

            	//store the data in a table
            	list_entry += "<table class = 'test'><tr id = '" + d_id + "Tab' class = 'work'><td>"+x+"</td>";
            	
            	title = too_long(title, cut);
            	list_entry += "<td><h4>" + title + "</h4>"

            	if (sub_title){
            		sub_title = too_long(sub_title, cut + 8);
            		list_entry += "<p>" + sub_title;
            	};


            	if (duration){
            		list_entry += "<b> " + duration.toString() + " secs</b></p>";
            	}else{
            		list_entry += "</p>"
            	}

            	//close everything up. 
            	list_entry += "</td></tr></table></div></a>"
                var id = "#" + d_id; 
          		
          		//we're appending so don't. 
                $(dest_div).append(list_entry);
                //have to reloop through our divs
                //to add the background image
                $(id).css({
                	"background-image": "url('"+ res.data[i].thumbnail + "')",
                	"background-size": "100%",
                	"background-repeat": 'no-repeat',
                	"background-position": "center"
                });
	        };

	        var see_more = "<a href = 'http://www.ign.com/" + type + "s/' class = 'see_more'>See More</a>"
	        $(dest_div).append(see_more);
    	}, "jsonp");
		//we're getting jsonp and not json for browser security reasons
    };

    //call the functions
	page_builder(art_req, "article", "article_list", 20);
	page_builder(vid_req, "video", "video_list", 20);
	

	////below is just our menu jquery

	//we have to use document.on for our animation effect, 
	//because we have to make sure these functions don't interact with
	//something may not have been loaded, and $get is, I believe, asynchronous
	//and will ignore our otherwise linear commands. 

	$(document).on({
		mouseenter: function () {
			var obj = $(this)
			var id = '#' + obj.attr('id').split('T')[0]
			$(id).animate({
				backgroundSize: '120%'
			}, 100)
		},
		mouseleave: function () {
			var obj = $(this)
			var id = '#' + obj.attr('id').split('T')[0]
			$(id).css({
				"background-size": "100%",
			})
		},
	}, 'table tbody tr');

	$('#op1').click(function(){
		$('#video_list').hide();
		$('#article_list').show();
		$('#op1').css({
			"background-color": "#CF000F",
			"color": "white",
		});
		$('#op2').css({
			"background-color": "white",
			"color": "#CF000F"
		});
	});

	$('#op2').click(function(){
		$('#article_list').hide();
		$('#video_list').show();
		$('#op2').css({
			"background-color": "#CF000F",
			"color": "white"
		});
		$('#op1').css({
			"background-color": "white",
			"color": "#CF000F"
		});
	});
});
