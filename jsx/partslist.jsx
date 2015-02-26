// страница списка разделов

var Partslist = React.createClass({
    propTypes: {
        data: React.PropTypes.object,      //данные
        goMix: React.PropTypes.func,       //функция перехода на страницу раздела
        goMixAll: React.PropTypes.func,    //функция перехода на страницу раздела
        setPart: React.PropTypes.func      //функция установки текущего раздела
    },

    goMix: function(part) {
        var goMix = this.props.goMix;
        var setPart = this.props.setPart;
        setPart(part);
        goMix();
    },

    render: function() {
        var data = this.props.data;
        var goMix = this.goMix;
        var goMixAll = this.props.goMixAll;

        var parts = data.db.map(function(item, i) {
            return (
                <a onClick={goMix.bind(null,i)} href='#' className='list-group-item'>
                    <h4 className='list-group-item-heading'>{data.db[i].name}</h4>
                    <p className='list-group-item-text'>{data.db[i].descr}</p>
                </a>
            );
        });

        return (
            <div className='panel panel-primary'>
                <div className='panel-heading'>{data.partslistHeader}</div>
                <div className='list-group'>
                    <a onClick={goMixAll} href='#' className='list-group-item'>
                        <h4 className='list-group-item-heading'>{data.partslistOwnTitle}</h4>
                        <p className='list-group-item-text'>{data.partslistOwnDescr}</p>
                    </a>
                    {parts}
                </div>
            </div>
        );
    }
});