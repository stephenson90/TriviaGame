$(document).ready(function(){
	$(".done").hide();

var questAns = ["Who was the legendary Benedictine monk who invented champagne? Dom Perignon.",
"Name the largest freshwater lake in the world? Lake Superior.",
"Where would you find the Sea of Tranquility? The Moon.",
"What is someone who shoes horses called? A farrier.",
"What item of clothing was named after its Scottish inventor? A Mackintosh.",
"What kind of weapon is a falchion? A sword.",
"Which word goes before vest, beans and quartet? String.",
"What is another word for lexicon? Dictionary.",
"Name the seventh planet from the sun. Uranus.",
"Who invented the rabies vaccination? Louis Pasteur.",
"Which is the only American state to begin with the letter 'p'? Pennsylvania.",
"Name the world's biggest island? Greenland.",
"What is the world's longest river? Amazon.",
"Name the world's largest ocean? Pacific.",
"What is the diameter of Earth? 8,000 miles.",
"Where would you find the world's most ancient forest? Australia.",
"What is the capital city of Spain? Madrid.",
"Which country is Prague in? Czech Republic.",
"Which English town was a forerunner of the Parks Movement and the first city in Europe to have a street tram system? Birkenhead.",
"Name the actor who starred in 142 films including The Quiet Man, The Shootist, The Searchers and Stagecoach? John Wayne.",
"Name the film noir actress who starred in I Married a Witch, The Glass Key, So Proudly We Hail! and Sullivan's Travels? Veronica Lake.",
"What is the oldest film ever made, and when was it made? Roundhay Garden Scene made in 1888.",
"Which actress has won the most Oscars? Katharine Hepburn, with 4 Oscars and 12 nominations.",
"Which actress said, \"Fasten your seatbelts. It's going to be a bumpy night,\" in All About Eve? Bette Davis.",
" Name the director of the Lord of the Rings trilogy? Peter Jackson.",
"Who played Neo in The Matrix? Keanu Reeves.",
"Name the actress whose career began at the age of 3, and who went on to star in films such as Contact, Maverick and The Silence of the Lambs? Jodie Foster.",
"Bray Studios, near Windsor in Berkshire, was home to which famous brand of horror films? Hammer Horror.",
"In which film did Humphrey Bogart say, \"We'll always have Paris?\" Casablanca",
"By what name is Lancelot Brown more usually known? Capability Brown.",
"Name the world famous gardens situated ten miles outside of London, close to the River Thames? Kew Gardens.",
"Which popular gardener created Barnsdale Gardens and was the author of many books such as The Ornamental Kitchen Garden, 'Gardeners World' Practical Gardening Course and Paradise Gardens? Geoff Hamilton.",
"Which garden is considered to be among the Seven Wonders of the Ancient World? The Hanging Gardens of Babylon.",
"What colour is a Welsh poppy? Yellow.",
"What colour is a Himalayan poppy? Blue.",
"Name the organic gardener who is almost as famous for his long blond plait as he is for his books such as Going Organic and The Gourmet Gardener and his regular appearances on the BBC radio's Gardener's Question Time? Bob Flowerdew.",
"Give the alternative name for a Mountain Ash tree? Rowan.",
"Which kind of bulbs were once exchanged as a form of currency? Tulips.",
"By which Latin name was Rosa Gallica previously known? Rosa Mundi",
"What colour jersey is worn by the winners of each stage of the Tour De France? Yellow.",
"Name the only heavyweight boxing champion to finish his career of 49 fights without ever having been defeated? Rocky Marciano.",
"Which sport does Constantino Rocca play? Golf.",
"Name the country where you would find the Cresta Run? Switzerland.",
"How many times was the Men's Tennis Singles at Wimbledon won by Bjorn Borg? Five.",
"In 2011, which country hosted a Formula 1 race for the first time? India.",
"Name the game played on a lawn called a 'crown green'? Bowls.",
"Which chess piece can only move diagonally? A bishop.",
"Name the only footballer to have played for Liverpool, Everton, Manchester City and Manchester United? Peter Beardsley.",
"In football, who was nicknamed 'The Divine Ponytail'? Roberto Baggio.",
"In needlework, what does UFO refer to? An unfinished object.",
"Name the famous ballet Russian dancer who changed the face of modern ballet? Rudolf Nureyev.",
"What is the painting 'La Gioconda' more usually known as? The Mona Lisa.",
"What does the term 'piano' mean? To be played softly.",
"Name the Spanish artist, sculptor and draughtsman famous for co-founding the Cubist movement? Pablo Picasso.",
"How many valves does a trumpet have? Three.",
"Who painted How Sir Galahad, Sir Bors, and Sir Percival were Fed with the Sanc Grael; But Sir Percival's Sister Died by the Way? Dante Gabriel Rossetti.",
"If you were painting with tempera, what would you be using to bind together colour pigments? Egg yolk.",
"What is John Leach famous for making? Pottery. When was William Shakespeare born? 23rd April 1564.",
"On what date did the Battle of Culloden take place? 16th April 1746.",
"Who was Henry VIll's first wife? Catherine of Aragon.",
"Which famous battle between the British Royal Navy and the combined fleets of the French Navy and Spanish Navy took place on 21st October 1805? Battle of Trafalgar.",
"Who became the British Prime Minister after Winston Churchill in 1955? Sir Robert Anthony Eden",
"When did Margaret Thatcher become Prime Minister? 1979.",
"When did the Cold War end? 1989.",
"Who was the architect who designed the Millennium Dome? Richard Rogers.",
"When did the Eurostar train service between Britain and France start running? 14th November 1994.",
"When was the euro introduced as legal currency on the world market? 1st January 1999.",
"What is the oldest surviving printed book in the world? The Diamond Sutra",
"In publishing, what does POD mean? Print on demand.",
"Name the author of On Her Majesty's Secret Service, Dr No and Thunderball, among others? Ian Fleming.",
"Which Shakespeare play features Shylock? The Merchant of Venice.",
"Who wrote the novel Death in Venice, which was later made into a film of the same name? Thomas Mann.",
"Who wrote the Vampire Chronicles, which include the novels Armand, Blood and Gold and Interview with the Vampire? Anne Rice.",
"How tall would a double elephant folio book be? 50 inches.",
"Who wrote the contemporary children's books about mermaids set on the coast of Cornwall? Helen Dunmore.",
"In \"Thunderbirds\", what was Lady Penelope's chauffeur called? Parker.",
"On \"Blue Peter\", what was John Noakes's dog called? Shep.",
"Name the BBC series about a shipping line set in Liverpool during the late 1800s? The Onedin Line.",
"In the TV series Dad's Army, what was Captain Mainwaring's first name? George.",
"Phyllis Nan Sortain Pechey was as famous for her flamboyant character as for her cookery books and TV show throughout the late 1960s to the mid-1970s. By what name was she more usually known? Fanny Cradock.",
"Which popular BBC series about old collectables began in 1979, presented by Bruce Parker and Arthur Negus, and is still running to this day? Antiques Roadshow.",
"Which BBC music programme was broadcast weekly between 1964 and 2006? Top of the Pops.",
"If you had Lafite-Rothschild on your dinner table, what would it be? Wine.",
"What is sushi traditionally wrapped in? Edible seaweed.",
"May Queen, Wisley Crab, Foxwhelps and Lane's Prince Albert are all species of what? Apples.",
"What is allspice alternatively known as? Pimento.",
"What colour is Absynthe? Green.",
"What flavour is Cointreau? Orange.",
"If you were to cut a hare into pieces, marinate it in wine and juniper berries then stew this slowly in a sealed container, what would this recipe be called? Jugged hare.",
"Costing around $2,600 per pound and made only to order by Knipschildt, what is the name of this chocolate truffle? Chocopologie."]

var questions = [];
var answers = [];
var tempo;
var temque
var quesdex;
var guessths = [];
var poschoic = [];


for ( var i = 0; i<questAns.length; i++){

	tempo = questAns[i].split("?").pop();
	temque = questAns[i].split("?").shift();
	answers.push(tempo);
	questions.push(temque);


}
console.log("questions");
	console.log(questions);
	console.log("Answers");
	console.log(answers);

	

function trivgame(){
	
		for(var i = 0; i < 10; i++){
		quesdex = Math.floor(Math.random()* 90);
		guessths.push(questions[quesdex]);
		poschoic.push(answers[quesdex]);						
		}

		for(var j = 0; j <10; j++){

			$("#triv").append( guessths[j] +" ? "+ '<br/>'+ "  1) "+ poschoic[j] +"  2) "
			+ poschoic[Math.floor(Math.random()*poschoic.length)]+"  3) "+poschoic[Math.floor(Math.random()*poschoic.length)]
			+'<br/>'+'<br/>');
		}
	$("#triv").css("margin","6px")	;
}

	 
	$(".start").on("click", function(){

		trivgame();

		$(".start").hide();
		$(".done").show();
	
	});

		console.log(guessths);
		console.log(poschoic);



	// var stCount = function(){

	// }

	// $(".start").on("click", funtion(){

	// 	stCount();


	// });






});