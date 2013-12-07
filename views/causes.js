MyApp.causesData =[
	{title: 'Girls education in Afghanistan', category: "education", chime_reason: "because my edcation allows me to", link: "www.google.com" }, { title: 'The unacceptability of violenece against women', category: "justice", chime_reason: "because", link: "www.google.com" },
	{title: 'Access to clean water', category: "health", chime_reason: "because", link: "www.google.com" },
	{title: 'The unacceptability of violenece against women', category: "justice", chime_reason: "because", link: "www.google.com" }
];

MyApp.causes = function() {

	var viewModel = {
		todayCauses: MyApp.causesData
    };

    return viewModel;
};
