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

const X_Animation = React.createClass({
	render(){
		return(
			<svg id="x" className="svg_icon" width="60px" height="60px" viewBox="0 0 20 20">
				<path className={this.state.isClicked && this.state.is_x_turn ? "animate_x" : "hide_x"} stroke="#fff" strokeWidth="1" 
				d="M15.898,4.045c-0.271-0.272-0.713-0.272-0.986,0l-4.71,4.711L5.493,
				4.045c-0.272-0.272-0.714-0.272-0.986,0s-0.272,0.714,0,0.986l4.709,4.711l-4.71,
				4.711c-0.272,0.271-0.272,0.713,0,0.986c0.136,0.136,0.314,0.203,0.492,0.203c0.179,
				0,0.357-0.067,0.493-0.203l4.711-4.711l4.71,4.711c0.137,0.136,0.314,0.203,0.494,
				0.203c0.178,0,0.355-0.067,0.492-0.203c0.273-0.273,0.273-0.715,
				0-0.986l-4.711-4.711l4.711-4.711C16.172,4.759,16.172,4.317,15.898,4.045z"></path>
			</svg>
			);
	}
});

const O_Animation = React.createClass({
	render(){
		return(

			);
	}
});

const Cell = React.createClass({
	getInitialState: function(){
		return({
			isClicked : false, 
			is_x_turn: false
		});
	},

	cellClicked: function(){
		this.setState({
			isClicked: !this.isClicked, 
			is_x_turn: !this.is_x_turn
		});
	},

	selectProperAnimation: function(){
		return this.state.is_x_turn ? <X_Animation /> : <O_Animation />;
	},

	render(){
		return(
		<td className={this.props.cellName} id="center" onClick={this.cellClicked}>
			{this.selectProperAnimation()}
		</td>);
	}
});

const Board = React.createClass({
	createBoard: function(){
		var board = [];
		var dict = {5:"cell_5", 6: "cell_6", 10:"cell_10", 11:"cell_11"};
		for(var i = 0; i < this.props.size; i++){
			var array_of_td = [];
			for(var j = 0; j < this.props.size; j++){
				array_of_td.push(<Cell key= {i+j} cellName={"cell " + dict[this.props.size]} />);
			}
			board.push(<tr key={i}>{ array_of_td }</tr>);
		}

		return board;
	},

	render(){
		return(
			<div className="table_wrapper">
				 <table className="row">
			        <tbody>{this.createBoard()}</tbody>
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
					<Board size={ this.state.selectSize }/>		
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




<svg id="o" className="svg_icon" id="center_o" width="60px" height="60px" xmlns="http://www.w3.org/2000/svg">
				<circle className={this.state.isClicked && this.state.is_x_turn ? "animate_o" : "hide_o"} cx="30" cy="30" r="15" fill="none" stroke-width="8" stroke="#fff" />
			</svg>