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
			}else{
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
	this.dough = 1000000
	this.deck = new Deck();
};

Dealer.prototype.deal = function(){
	this.deck.draw();
}

Dealer.prototype.start = function(){
	this.deck.construct();
	this.deck.shuffle();
	return this;
};

Dealer.prototype.hit = function(){
	this.hand.push(this.deal());
});

Dealer.prototype.hand_value = function(){
	return sum_hand(this.hand)
};

Dealer.prototype.reveal_hand = function(){

}

var Player = function(name){
	this.name = name;
	this.hand = [];
	player.dough = 100

}

Player.prototype.see_hand = function(){
	for (var i = 0; i < this.hand.length; i++){
		console.log(this.hand[i].name.toString() + " of " + this.hand[i].suite);
	}
}

Player.prototype.hand_value = function(){
	return sum_hand(this.hand)
}

Player.prototype.hit = function(dealer_object)
	this.hand.push(dealer_object.deal())
}

var end_user;
var dealer;

$(#formy).submit(function(){
	var name = $(#name).val();
	end_user = new Player(name);
	return false;
});

$(#start).click(function(){
	dealer = new Dealer;
	deck = new Deck;
	
	dealer.start();
	$(#card)
});

$(#)


