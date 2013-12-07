var calculateTheme = function(category) {
    switch(category) {
        case 'Education':
            return 'orange';
        case 'Justice':
            return 'green';
        default:
            return 'blue';
    }
};

MyApp.causes = function() {

	var viewModel = {
        dataSource: new DevExpress.data.DataSource({
            load: function(loadOptions) {
                return $.getJSON('http://chimeapp.herokuapp.com/causes');
            },
            map: function(item) {
                return {
                    title: item.title,
                    id: item.id,
                    category: item.category
                };
            }
        })
    };
    return viewModel;
};

