var Mix = React.createClass({

    propTypes: {
        data: React.PropTypes.object,       //данные
        part: React.PropTypes.number,       //текущий раздел
        goParts: React.PropTypes.func       //функция перехода в список разделов
    },

    getInitialState: function () {
        var curr = this.props.data.db[this.props.part];
        return {
            numOfA: curr.Atests.length,     //кол-во легких заданий
            numOfB: curr.Btests.length,     //кол-во средних заданий
            numOfC: curr.Ctests.length,     //кол-во трудных заданий
            testing: false                  //тестирование или выбор заданий?
        };
    },

    setA: function(e) {
        var count = this.props.data.db[this.props.part].Atests.length;
        var how = +e.target.value;
        if (how > count) how = count;
        if (how < 0) how = 0;
        this.setState({numOfA: how});
    },

    setB: function(e) {
        var count = this.props.data.db[this.props.part].Btests.length;
        var how = +e.target.value;
        if (how > count) how = count;
        if (how < 0) how = 0;
        this.setState({numOfB: how});
    },

    setC: function(e) {
        var count = this.props.data.db[this.props.part].Ctests.length;
        var how = +e.target.value;
        if (how > count) how = count;
        if (how < 0) how = 0;
        this.setState({numOfC: how});
    },

    goTest: function(testing){
        this.setState({
            testing: testing
        });
    },

    render: function() {
        var part = this.props.part;
        var data = this.props.data;
        var countA = this.state.numOfA;
        var countB = this.state.numOfB;
        var countC = this.state.numOfC;
        var curr = data.db[part];

        var testing = this.state.testing;
        if (testing) {
            var goParts = this.props.goParts;
            return <Test data={data} part={part} countA={countA} countB={countB} countC={countC} goParts={goParts} />;
        }

        var total = this.state.numOfA + this.state.numOfB + this.state.numOfC;
        return (
            <div className='panel panel-primary'>
                <div className='panel-heading'>{data.mixHeader}&laquo;{curr.name}&raquo;</div>
                <div className='panel-body'>
                    <p>{data.mixText}</p>
                    <div className='row'>
                        <div className='col-xs-4 text-center'>
                            <strong>{data.mixLevelA}</strong>
                            <div className='input-group'>
                                <input onChange={this.setA} value={countA} className='form-control' type='number' />
                                <span className='input-group-addon'>{data.mixFrom}{curr.Atests.length}</span>
                            </div>
                        </div>
                        <div className='col-xs-4 text-center'>
                            <strong>{data.mixLevelB}</strong>
                            <div className='input-group'>
                                <input onChange={this.setB} value={countB} className='form-control' type='number' />
                                <span className='input-group-addon'>{data.mixFrom}{curr.Btests.length}</span>
                            </div>
                        </div>
                        <div className='col-xs-4 text-center'>
                            <strong>{data.mixLevelC}</strong>
                            <div className='input-group'>
                                <input onChange={this.setC} value={countC} className='form-control' type='number' />
                                <span className='input-group-addon'>{data.mixFrom}{curr.Ctests.length}</span>
                            </div>
                        </div>
                    </div>
                    <h3 className='text-right'>{data.mixTotal}{total}</h3>
                    <input className='btn btn-success btn-lg btn-block' value={data.mixStart} type='button' />
                </div>
            </div>
        );
    }
});