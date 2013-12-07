MyApp.chimerSet = [
	{id:1, img:"assets/salma_hayek.jpeg", name:"Salma Hayek", chime_score:30000},
	{id:2, img:"assets/salma_hayek.jpeg", name:"Salma Hayek", chime_score:20000},
	{id:3, img:"assets/salma_hayek.jpeg", name:"Salma Hayek", chime_score:10000},
];

function chimer(id, imgUrl, name, chime_score) {
     this.id = ko.observable(id);
	 this.img = ko.observable(imgUrl);
	 this.name = ko.observable(name);
	 this.chime_score = ko.observable(chime_score);
}

MyApp.chimers = function() {

	var viewModel = {
	    selectedItem: ko.observable(),
	    chimer: MyApp.chimerSet;
 	};
 	
 	return viewModel;

};
