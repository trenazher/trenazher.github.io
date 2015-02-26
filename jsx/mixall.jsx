var Mixall = React.createClass({
    props: {
        data: React.PropTypes.object,
        setTasks: React.PropTypes.func,
        goTest: React.PropTypes.func,
        goParts: React.PropTypes.func
    },

    getInitialState: function() {
        return {
            checkedParts: [],
            level: 0
        };
    },

    checkPart: function(i) {
        var data = this.props.data;
        var checkedParts = this.state.checkedParts.slice();
        var index = checkedParts.indexOf(i);
        if (index !== -1)
            checkedParts.splice(index, 1);
        else
            checkedParts.push(i);
        this.setState({checkedParts: checkedParts});
    },

    checkLevel: function(level) {
        this.setState({level: level});
    },

    goTest: function() {
        var setTasks = this.props.setTasks,
            goTest = this.props.goTest,
            level = this.state.level,
            checkedParts = this.state.checkedParts,
            testscount = this.props.data.levels[level-1];
        var tests = createTasks(checkedParts, testscount);
        setTasks(tests);
        goTest();
    },

    startStandart: function() {
        var setTasks = this.props.setTasks,
            goTest = this.props.goTest,
            checkedParts = this.state.checkedParts,
            testscount = this.props.data.levelStandart;
        var tests = createTasks(checkedParts, testscount);
        setTasks(tests);
        goTest();
    },

    render: function() {
        var data = this.props.data,
            checkedParts  = this.state.checkedParts,
            checkPart = this.checkPart,
            level = this.state.level,
            checkLevel = this.checkLevel,
            goTest = this.goTest,
            startStandart = this.startStandart,
            goParts = this.props.goParts;

        var partsList = data.db.map(function(item, i) {
            return (
                <div className='checkbox'><label>
                    <input onChange={checkPart.bind(null, i)} type='checkbox' value={''+i} checked={checkedParts.indexOf(i) > -1} name='checkedParts' />
                    {item.name}
                </label></div>
            );
        });

        return (
            <div className='panel panel-primary'>
                <div className='panel-heading'>{data.mixAllHeader}</div>
                <div className='panel-body'>
                    <div>{data.mixAllText}</div>
                    {partsList}
                    <div>{data.mixAllLevelText}</div>
                    <label className='checkbox-inline'>
                        <input onChange={checkLevel.bind(null,1)} type='radio' value='levelA' checked={level==1} /> {data.mixAllLevelA}
                    </label>
                    <label className='checkbox-inline'>
                        <input onChange={checkLevel.bind(null,2)} type='radio' value='levelB' checked={level==2} /> {data.mixAllLevelB}
                    </label>
                    <label className='checkbox-inline'>
                        <input onChange={checkLevel.bind(null,3)} type='radio' value='levelC' checked={level==3} /> {data.mixAllLevelC}
                    </label>
                    <br />
                    <br />
                    <input className='btn btn-success btn-block' value={data.mixAllStart} type='button' onClick={goTest} disabled={level == 0 || checkedParts.length == 0} />
                    <input onClick={startStandart} className='btn btn-success btn-block' value={data.mixAllStartStandart} type='button' disabled={checkedParts.length == 0} />
                </div>
                <div className="panel-footer"><div>
                    <button onClick={goParts} className="btn btn-primary pull-right">Вернуться</button>
                </div></div>
            </div>
        );
    }
});