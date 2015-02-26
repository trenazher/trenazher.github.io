//начальная страница привествия

var Hello = React.createClass({
    propTypes: {
        data: React.PropTypes.object,       //данные
        goParts: React.PropTypes.func       //функция перехода в список разделов
    },
    render: function() {
        var data = this.props.data;
        return (
            <div className='jumbotron'>
                <h1>{data.helloHeader}</h1>
                <p className='lead'>{data.helloText}</p>
                <p><button onClick={this.props.goParts} className='btn btn-lg btn-primary'>{data.helloButton}</button></p>
            </div>
        );
    }
});