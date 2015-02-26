var Mix = React.createClass({
    props: {
        part: React.PropTypes.array,
        data: React.PropTypes.object,
        setTasks: React.PropTypes.func,
        goTest: React.PropTypes.func,
        goParts: React.PropTypes.func
    },

    getInitialState: function() {
        return {
            level: 0
        };
    },

    checkLevel: function(level) {
        this.setState({level: level});
    },

    startBase: function(level) {
        var goTest = this.props.goTest;
        var part = this.props.part;
        var setTasks = this.props.setTasks;
        var testscount = this.props.data.levels[level];
        var tasks = createTasks([part], testscount);
        setTasks(tasks);
        goTest();
    },

    startStandart: function() {
        var goTest = this.props.goTest;
        var part = this.props.part;
        var setTasks = this.props.setTasks;
        var testscount = this.props.data.levelStandart;
        var tasks = createTasks([part], testscount);
        setTasks(tasks);
        goTest();
    },

    render: function() {
        var data = this.props.data;
        var part = this.props.part;
        var checkLevel = this.checkLevel;
        var level = this.state.level;
        var startBase = this.startBase;
        var startStandart = this.startStandart;
        var curr = data.db[part];
        var goParts = this.props.goParts;

        return (
            <div className='panel panel-primary'>
                <div className='panel-heading'>{data.mixHeader}&laquo;{curr.name}&raquo;</div>
                <div className='panel-body'>
                    <p>{data.mixText}</p>
                    <div className='row'>
                        <div className='col-xs-4'><input onClick={startBase.bind(null, 0)} className='btn btn-default btn-block' value={data.mixLevelA} type='button' /></div>
                        <div className='col-xs-4'><input onClick={startBase.bind(null, 1)} className='btn btn-default btn-block' value={data.mixLevelB} type='button' /></div>
                        <div className='col-xs-4'><input onClick={startBase.bind(null, 2)} className='btn btn-default btn-block' value={data.mixLevelC} type='button' /></div>
                    </div>
                    <br />
                    <input onClick={startStandart} className='btn btn-success btn-block' value={data.mixStartStandart} type='button' />
                </div>
                <div className="panel-footer"><div>
                    <button onClick={goParts} className="btn btn-primary pull-right">Вернуться</button>
                    <div class="clearfix"></div>
                </div></div>
            </div>
        );
    }
});