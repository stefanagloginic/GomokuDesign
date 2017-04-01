const Scoreboard = React.createClass({
	render(){
		return(
			<div>
				<h2 className="title">Scoreboard</h2>
				<div className="scoreboard">
					<div className="innerboard">
						<div className="win">
							<p>Win: </p> 
						</div>
						<div className="lose">
							<p>Lose: </p>
						</div>
					</div>
				</div>
			</div>
			);
	}
});

const Board = React.createClass({
	createBoard: function(){
		
	},
	render(){
		return(
			<div className="table_wrapper">
				 <table className="board row">
			        <tbody>
			            <tr className="heading">
			                <th className="hcell"></th>
			                <th className="hcell"></th>
			                <th className="hcell"></th>
			            </tr>
			            <tr className="row2">
			                <td className="cell"></td>
			                <td className="cell"></td>
			                <td className="cell"></td>
			            </tr>
			            <tr className="row3">
			                <td className="cell"></td>
			                <td className="cell"></td>
			                <td className="cell"></td>
			            </tr>
			            <tr className="row4">
			                <td className="cell"></td>
			                <td className="cell"></td>
			                <td className="cell"></td>
			            </tr>
			        </tbody>
			    </table>
			</div>
			);
	}
});

const Options = React.createClass({
	getInitialState: function(){
		return{selectSize: 5};
	},

	handleSizeChange: function(event){
		this.setState({selectSize: event.target.value});
	},

	render(){
		return(
			<div className="wrapper">
				<Scoreboard />
				<div className="row">	
					<Board size={this.state.selectSize}/>		
					<div className="options">
						<p className="board_size_p">Board Size </p>
						<select className="board_size_option" value={this.state.selectSize} onChange={this.handleSizeChange}>
							<option className="size_5 size" value={5}>5 x 5</option>
							<option className="size_6 size" value={6}>6 x 6</option>
							<option className="size_10 size" value={10}>10 x 10</option>
							<option className="size_11 size" value={11}>11 x 11</option>
						</select>
						<p className="player">Player</p>
						<div className="icons row">
							<div className="font_icon o_icon">
								<i className="fa fa-circle-o fa-2x"></i>
							</div>
							<div className="font_icon x_icon">
								<i className="fa fa-times fa-2x"></i>
							</div>
						</div>
					</div>
				</div>
			</div>			
		);
	}
});

ReactDOM.render(<Options />, document.getElementById('main'));