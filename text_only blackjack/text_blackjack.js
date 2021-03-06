var Card = function(name, suite){
	this.name = name;
	this.suite = suite;
	if (Number.isInteger(this.name)){
		this.value = this.name;
	}else{
		if{this.name != "ace"}
			this.value = 10;
		}else{
			this.value = [1, 11];
		}
	}
};

var sum_hand = function(card_arr){
	var sum = 0;
	var ace_sum;

	for (var i = 0; i < card_arr.length; i ++ ){
		if (card_arr[i].name == 'ace' && Array.isArray(card_arr[i].value)){
			ace_sum = sum;
			sum += 1;
			ace_sum += 11;
		}else{
			sum += card_arr[i].value 
		}
	}

	if (ace_sum){
		return {"ace_1": sum, "ace_11": ace_sum}
	}else{
		return sum;
	};
}

var Deck = function(){
	this.stack = [];
}

	Deck.prototype.construct = function(){
		var card_names = ["ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King"];
		var suite = "spades";
		for (i = 0; i < 4; i++){
			for (c = 0; c < cards.length; c++){
				if (i == 2){
					suite = "clubs"
				}else if (i == 3){
					suite = "hearts"
				}else if (i == 4){
					suite = "diamonds"
				};
				var card = new Card(card_names[c], suite)
				this.stack.push(card)
			};
		};
	};

	Deck.prototype.shuffle = function(){
		var i = this.deck.length - 1;
		var swap;
		var temp;

		while (i > 0){
			swap = Math.floor(Math.random() * i);

			temp = this.stack[i];
			this.stack[i] = this.stack[swap];
			this.stack[swap] = temp;

			i--;
		}

		return this;
	};

	Deck.prototype.see = function(){
		for (var i = 0; i < this.deck.length; i++){
			console.log(this.stack[i].name.toString() + " of " + this.stack[i].suite);
		}

		return this;
	};

	Deck.prototype.draw = function(){
		return this.stack.pop();
	};

	Deck.prototype.reset = function(){
		this.stack = [];
		return this;
	};

var Dealer = function(){
	this.hand = [];
	this.deck = new Deck();
};

	Dealer.prototype.deal = function(){
		return this.deck.draw()
	}

	Dealer.prototype.start = function(){
		this.deck.construct();
		this.deck.shuffle();
		return this;
	};

	Dealer.prototype.hit = function(draw){
		this.hand.push(draw);
		return this;
	});

	Dealer.prototype.hand_value = function(){
		return sum_hand(this.hand)
	};


var Player = function(name){
	this.name = name;
	this.hand = [];
	player.dough = 100

}

	Player.prototype.see_hand = function(){
		var arr;
		for (var i = 0; i < this.hand.length; i++){
			arr.push(this.hand[i].name.toString() + " of " + this.hand[i].suite);
		}

		return arr;
	}

	Player.prototype.hand_value = function(){
		return sum_hand(this.hand)
	}

	Player.prototype.hit = function(card)
		this.hand.push(card)
		return this;
	}

	Player.prototype.lose_bet = function(bet){
		this.dough -= bet;
		return this;
	}

var end_user;
var dealer;

var from_21 = function(number){
	return number - 21;
}

$(#formy).submit(function(){
	var name = $(#name).val();
	end_user = new Player(name);
	return false;
});

$(#start).click(function(){
	dealer = new Dealer;
	
	dealer.start().hit()
	end_user.hit(dealer.deal())

	$(#dough_box).html("<p class = 'user_dough'" + user.dough.toString() + "</p>")
	var log = end_user.see_cards();
	$(#log).append("<p>You dealer hath done dealt. Your cards:</p>")
	for (var x = 0; x < log.length; x++){
		$(#log).append(log[x]);
	};
	var sum = end_user.hand_value
	if (typeof sum == 'object'){
		$(#log).append("<p>" + from_21(sum['ace_1']).toString() + " from 21, if ace is 1</p>")
		$(#log).append("<p>" + from_21(sum['ace_11']).toString() + " from 21, if ace is 11</p>")
	}

});

$(#hit).click(function(){
	end_user.hit(dealer.deal())
	var user_sum = end_user.sum_hand()

	var dealer_quandary = dealer.hand_value();
	if (typeof dealer_quandary == 'object'){
		if (from_21(dealer_quandary['ace_11'] != 0){
            dealer.hit();
		}
	}else{
		dealer.hit();
	}

	if (typeof user_sum == 'object'){
		if (from_21(dealer_quandary['ace_11'] < 21 && from_21(dealer_quandary['ace_1'] < 21){
           console.log('you lose')
		}else if (from_21(dealer_quandary['ace_11'] < 21 && from_21(dealer_quandary['ace_1'] < 21)

		}
	}else{
		dealer.hit();
});

$(#bet_butt).click(function(){
	var bet = $(#user_bet)
	$(#bet_box).html(bet)
}

