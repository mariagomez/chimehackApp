
MyApp.share = function(params) {

	var viewModel = {
        dataSource: new DevExpress.data.DataSource({
            load: function(loadOptions) {
                return $.getJSON('http://chimeapp.herokuapp.com/causes/' + params.id);
            },
            map: function(item) {
            	console.log(item);
                return {
                    title: item.title,
                    id: item.id
                };
            }
        })
    };
    console.log(viewModel.dataSource.title);
    return viewModel;
}