
// angular
var app = angular.module('mularczyk', ['ui.bootstrap']);
app.controller('ml', ['$scope', function($scope){
	$scope.num = 1;
	$scope.changeLang = function(){
		if ($scope.num == 0){
			$scope.num = 1;
		}
		else {
			$scope.num = 0;
		}
		console.log($scope.num)
	}
	
	$scope.dictionary = 
{'navHome' : ['Home', 'Strona domowa'], 'navAbout' : ['About', 'O nas'], 'navServices' : ['Services', 'Usługi'], 'navGallery' : ['Gallery', 'Galeria'], 'domPic1' : ['Photo1', 'Zdjęcie1'], 'domServices' : ['Services', 'Usługi'], 'domPic2' : ['Photo2', 'Zdjęcie2'], 'domPic3' : ['Photo3', 'Zdjęcie3'], 'domContact' : ['Contact', 'Kontakt'], 'domAbout' : ['About', 'O nas'], 'domPic4' : ['Photo4', 'Zdjęcie4'], 'domGallery' : ['Gallery', 'Galeria'], 'domMotto': ['Time to fulfil your dreams', 'Czas by wprowadzić twoją wizję w rzeczywistość'], 'onasOpis': ['Our journey into the world of design came from a combination of passion and experience. We started to cooperate while searching for new designs and decorative ways so we started to work as a team and we are in the decorative industry for several years now. Continuous improvement of the production process and experience make us produce high quality durable products. We have a wide assortment of flocks, fabrics and furniture skins in a full range of colors. We realize not only our own designs, but also individual projects adapting to the requirements and taste of the customer.', 'Nasza podróż w świat designu powstała z połączenia pasji i doświadczenia. Szukając nowych wzorów i rozwiązań dekoracyjnych zaczęliśmy współpracować ze sobą przy różnych projektach i pewnego dni narodziła się myśl aby działać jako zespół i pracujemy wspólnie już kilka lat. Ciągłe doskonalenie procesu produkcji oraz doświadczenie sprawiają, że wykonujemy produkty trwałe o wysokiej jakości. Posiadamy szeroki asortyment floków,tkanin i skór meblowych w pełnej gamie kolorystycznej. Realizujemy nie tylko wzory własne, ale i indywidualne projekty, dostosowując się do wymagań i gustu klienta'], 'serFlTl':['Flocking', 'Flokowanie'], 'serFlOp': ['Flocking is the process of depositing many small fiber particles (called flock) onto a surface. It can also refer to the texture produced by the process, or to any material used primarily for its flocked surface.By this method we can decorated  car accessories (especially dashboards), toys, furniture, t-shirt printing, caps and more.', 'Proces technologiczny polegający na nanoszeniu ozdobnej warstwy ze strzyży tekstylnej na przedmioty wykonane z tkaniny, drewna, szkła, tworzywa sztucznego lub gumy. Strzyża tekstylna – zwana flokiem - to włókno z tworzywa sztucznego pocięte na odcinki długości od 0,3 do 5 mm.'], 'serUphTit':['Upholstery', 'Tapicerowanie i renowacja'], 'serUphOp':['In short, upholstery mainly depends on repairing upholstery of furniture, cars and other products. However, the practical range of upholstered competence is much broader.', 'Mówiąc krótko, do obowiązków tapicera należy tapicerowanie (oraz naprawa tapicerki) mebli, samochodów i innych wyrobów. Jednak praktyczny zakres posiadanych kompetencji tapicera jest dużo szerszy.'], 'serFlOp2':['By this method we can decorated  car accessories (especially dashboards), toys, furniture, t-shirt printing, caps and more.','Flokowana powierzchnia wyglądem przypomina zamsz. Tą metodą ozdabia się meble, zabawki, figury dekoracyjne, nadruki na koszulkach, czapeczkach, wyposażenie samochodów (zwłaszcza deski rozdzielcze) i wiele innych.'], 'serFlOf':['We do:', 'Wykonujemy flokowanie:'], 'serFlLi1':['flocking of furniture,', 'mebli,'], 'serFlLi2':['flocking of decorative figures,', 'figur dekoracyjnych,'], 'serFlLi3':['flocking of car interiors,', 'wnętrz samochodów,'], 'serFlLi4':['flocking of anything else, your wish is our command...', 'i wszystkiego innego, twoje życzenie jest dla nas rozkazem...'], 'serWhyFlT' : ['Why flock?', 'Po co flokować?'], 'serFlR1': ['Flocking brings new attractive look and nice gentletouch surface which is very easy to clean.', 'Flokowanie pozwala uzyskać nowy ciekawy wygląd i przyjemną w dotyku powierzchnię, która w dodatku jest łatwa w czyszczeniu.'], 'serFlR2': ['A large group treats flocking as a means of renewal. This way you can easily mask holes, bumps, faded elements. Additional clocks or other blooms are also flocked - so everything looks consistent. Flocked items are not only nicer.', 'Spora grupa traktuje flokowanie jako sposób na odnowienie starych mebli i urządzeń. W ten sposób można łatwo zamaskować dziury, nierówności, wyblakłe elementy.'], 'serFlR3': ['Many people choose to simply beautify the car. Thanks to this treatment, the inside of the car becomes better silenced, dust is not collected, and cleaning is fabulously simple. Just a vacuum cleaner, a whisk, possibly a damp cloth.', 'Wiele osób decyduje się w ten sposób upiększyć auto jak i zmienić wyciszyć wnętrze.'], 'serFlR4': ['The possibilities are endless... :)', 'Możliwości wykorzystania flokowania są niemalże nieograniczone :)'], 'serUphOf':['We do:', 'Wykonujemy'], 'serUphO1': ['upholstery of furniture - this is the basic task of upholstery. Probably everyone has in his home sofas, loungers and armchairs upholstered in upholstery. This over time consumes and destroys. The purpose of upholstery is to repair such upholstery or complete replacement. This applies both to hard and soft substrates.', 'tapicerowanie mebli – jest to podstawowe zadanie tapicera. Chyba każdy posiada w swoim domu kanapy, wersalki czy fotele obite tapicerką. Ta z czasem zużywa się i niszczeje. Zadaniem tapicera jest naprawa takiej tapicerki lub całkowita jej wymiana. Dotyczy to zarówno mebli na podłożach twardych, jak i miękkich.'], 'serUphO2': ['upholstery of car interiors - we renovate car, truck and bus interiors. Our activities include car areas such as seats, seat covers, headliners, roof coverings (including sunroofs) and door panels.', 'tapicerowanie wnętrz samochodów – zajmujemy się odnawianiem wnętrz samochodów osobowych, ciężarowych oraz autobusów. Działania nasze obejmują takie obszary samochodów, jak siedzenia, pokrowce na siedzenia, podsufitka, obicia dachowe (w tym szyberdachy) oraz panele drzwi.'], 'serUphO3': ['upholstered furniture - upholstery, sofas, chairs, sofas, couches, car seats, as well as decorative items such as curtains, curtains, rugs and carpets can be created in the hands of a upholsterer.', 'wykonywanie mebli tapicerowanych – w rękach tapicera mogą powstawać takie przedmioty, jak pufy, kanapy, krzesła, wersalki, tapczany, fotele samochodowe, ale również przedmioty dekoracyjne, np. zasłony, kotary czy dywany i wykładziny.'], 'serUphO4': ['finishing and decorating upholstered products with haberdashery, quilting or other kind of decoration.', 'wykończanie oraz dekorowanie wyrobów tapicerskich za pomocą pasmanterii, pikowania czy też przy pomocy innego rodzaju ozdób.'] 
}
}

])

app.directive('cmdomowa', function($window) {
	return {
		restrict: 'E',
		template: '<div ng-include="cmdomowa"></div>',
        link: function(scope) {
			scope.cmdomowa = 'domowa.html';
		}
	};
});

app.directive('cmonas', function($window) {
	return {
		restrict: 'E',
		template: '<div ng-include="cmonas"></div>',
        link: function(scope) {
			scope.cmonas = 'onas.html';
		}
	};
});

app.directive('cmuslugi', function($window) {
	return {
		restrict: 'E',
		template: '<div ng-include="cmuslugi"></div>',
        link: function(scope) {
			scope.cmuslugi = 'uslugi.html';
		}
	};
});

app.directive('cmgaleria', function($window) {
	return {
		restrict: 'E',
		template: '<div ng-include="cmgaleria"></div>',
        link: function(scope) {
			scope.cmgaleria = 'galeria.html';
		}
	};
});


// jquery 

