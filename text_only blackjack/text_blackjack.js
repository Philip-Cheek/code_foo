var Card = function(name, suite){
	this.name = name;
	this.sute = suite;
	if (Number.isInteger(this.name)){
		this.value = this.name;
	}else{
		this.value = 10;
	}
};

var Dealer = function(){
	this.deck = [];
	this.hand = [];
	this.dough = 1000000
};

Dealer.prototype.construct = function(){
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
			this.deck.push(card)
		};
	};
};


Dealer.prototype.shuffle = function(){
	var i = this.deck.length - 1;
	var swap;
	var temp;

	while (i > 0){
		swap = Math.floor(Math.random() * i);

		temp = this.deck[i];
		this.deck[i] = this.deck[swap];
		this.deck[swap] = temp;

		i--;
	}
};

Dealer.prototype.see = function(){
	for (var i = 0; i < this.deck.length; i++){
		console.log(this.deck[i].name.toString() + " of " + this.deck[i].suite);
	}
};

Dealer.prototype.draw = function(){
	return this.deck.pop();
};

Dealer.prototype.get_hand = function(){
	
}

Dealer.prototype.reset = function(){
	this.deck = [];
};

var Player = function(name){
	this.name = name;
	this.hand = [];

}

Player.prototype = function(see_hand){
	for (var i = 0; i < this.hand.length; i++){
		console.log(this.hand[i].name.toString() + " of " + this.hand[i].suite);
	}
}

var BlackJack = function(player_object, dealer_object){
	this.player = player_object;
	this.dealer = dealer_object;
	var sum_cards = function(card_arr){
		var sum = 0;
		for (var i = 0; i < card_arr.length; i++){
			sum += car_arr.value;
		}
		return sum;
	};
};


BlackJack.prototype.start = function(){
	this.dealer.construct();
	this.dealer.shuffle();
	console.log('let\'s get started!')
}

BlackJack.prototype.dealer_draw = function(){
	this.dealer.hand.push(this.dealer.draw());
}

BlackJack.prototype.player_draw = function(){
	this.player.hand.push(this.dealer.draw());
	console.log('')
}

