//главный компонент.
//он генерирует меню навигации и, если выбрано тестирование итд, подставляет компонент тестирования
//принимает свойство data - объект навигации

var Main = React.createClass({

    propTypes: {
        data: React.PropTypes.object        //данные
    },

    getInitialState: function() {
        return {
            part: -3      // -3 - страница приветствия, -2 - страница разделов, -1 - генератор заданий, 0,1,2,3... - раздел №1, раздел №2,...
        };
    },

    //установка раздела
    changePart: function(part) {
        this.setState({
            part: part
        });
    },

    render: function() {
        var part = this.state.part;
        var data = this.props.data;
        var changePart = this.changePart;
        var html = null;

        if (part == -3)      html = <Hello data={data} goParts={changePart.bind(null,-2)} />;
        else if (part == -2) html = <Partslist data={data} goPart={changePart} />;
        else if (part == -1) html = <Mixall data={data} />;
        else                 html = <Mix data={data} part={part} goParts={changePart.bind(null,-2)} />;

        return <div className='container'>{html}</div>;
    }

});