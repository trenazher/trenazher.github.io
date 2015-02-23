// страница списка разделов

var Partslist = React.createClass({
    propTypes: {
        data: React.PropTypes.object,       //данные
        goPart: React.PropTypes.func        //функция перехода на страницу раздела
    },

    render: function() {
        var data = this.props.data;
        var goPart = this.props.goPart;

        var parts = data.db.map(function(item, i) {
            return (
                <a onClick={goPart.bind(null,i)} href='#' className='list-group-item'>
                    <h4 className='list-group-item-heading'>{data.db[i].name}</h4>
                    <p className='list-group-item-text'>{data.db[i].descr}</p>
                </a>
            );
        });

        return (
            <div className='panel panel-primary'>
                <div className='panel-heading'>{data.partslistHeader}</div>
                <div className='list-group'>
                    <a onClick={goPart.bind(this,-1)} href='#' className='list-group-item'>
                        <h4 className='list-group-item-heading'>{data.partslistOwnTitle}</h4>
                        <p className='list-group-item-text'>{data.partslistOwnDescr}</p>
                    </a>
                    {parts}
                </div>
            </div>
        );
    }
});