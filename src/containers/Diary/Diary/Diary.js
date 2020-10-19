import React, { Component } from "react";

import DiaryCard from "../../../components/DiaryCard/DiaryCard";
import AppHeader from "../../../components/Header/AppHeader";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button"
import TextField from "@material-ui/core/TextField"
import Collapse from "@material-ui/core/Collapse"
import { ContactSupportOutlined } from "@material-ui/icons";


class Diary extends Component {
	constructor(props) {
		super(props);
		this.wrapper = React.createRef();
		this.state = {
			det: [{ title: "aaccaaaa", user: "bbbb", description: "fjlajffjjfjsdjfjsljfd" },
			{ title: "aaaaaa", user: "bbbb", description: "fjlajffjjfjsdjfjsljfd" },
			{ title: "aaaaaa", user: "bbbb", description: "fjlajffjjfjsdjfjsljfd" },
			{ title: "aaaaaa", user: "bbbb", description: "fjlajffjjfjsdjfjsljfd" },
			{ title: "aaaaaa", user: "bbbb", description: "fjlajffjjfjsdjfjsljfd" },
			{ title: "aaaaaa", user: "bbbb", description: "fjlajffjjfjsdjfjsljfd" }],
			checked: false,
			currentUser: "",
			textTitle: "",
			textDescription: ""
		}
	}

	componentDidMount(props) {
		console.log(this.props.location.state.userName)
		this.setState({
			currentUser: this.props.location.state.userName
		})
	}

	render() {
		const onSubmitHandler = (event) => {
			event.preventDefault();
			if (this.state.textTitle.length === 0) {
				console.log("empty title");
			} else if (this.state.textDescription.length === 0) {
				console.log("empty description");
			} else {
				this.setState(prev => ({
					det: prev.det.concat({ title: prev.textTitle, user: prev.currentUser, description: prev.textDescription }),
					textTitle: "",
					textDescription: ""
				}))

			}
		}
		const handleChange = () => {
			this.setState(prev => ({
				checked: !prev.checked
			}))
		};
		const cards = this.state.det.map((i, index) => {
			return <Grid key={index} xs={3} item ><DiaryCard key={index} title={i.title} user={i.user} desc={i.description} /></Grid>
		})
		return (
			<React.Fragment>

				<AppHeader />
				<div >
					<Grid item container >
						<Grid item xs={12} ref={this.wrapper}>
							<form
								id="login"
								noValidate
								onSubmit={onSubmitHandler}
							>
								{/* <Grid xs={12} item > */}
								<div >
									<TextField
										id="standard-full-width"
										label=""
										style={{}}
										placeholder="Emter new text"
										onClick={handleChange}
										value={this.state.textTitle}
										fullWidth
										margin="normal"
										onChange={e => this.setState({ textTitle: e.target.value })}

									/>
									{/* <input 
										value={this.state.textTitle}
										onChange={e => this.setState({ textTitle: e.target.value })}
										id="title"
										placeholder="Enter new text"
										onClick={handleChange}
										style={{
											backgroundColor: "rgb(140,245,255)"
										}}
										 /> */}
									<div >
										<Collapse in={this.state.checked} ref={this.wrapper}>
											<Button size="small" align="center" variant="contained" color="primary" type="submit" style={{ borderRadius: 30 }}>
												Submit
												</Button>
											<TextField
												id="outlined-secondary"
												label="Enter Descrption"
												variant="outlined"
												color="primary"
												required
												multiline
												value={this.state.textDescription}
												onChange={e => this.setState({ textDescription: e.target.value })}
												rows={5}
												fullWidth
											/>
										</Collapse>
									</div>
								</div>
								{/* </Grid> */}
							</form>
						</Grid>
						<Grid container item spacing={2}>
							{cards}
						</Grid>
					</Grid>
				</div>
			</React.Fragment>
		);
	}
}

export default Diary;