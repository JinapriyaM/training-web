import React, { useState } from "react";
import {Redirect} from 'react-router-dom';

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles({
	root: {
		// minWidth: 50,
		// maxWidth: 700,
		// minHeight: 366,
		marginTop: 200,
		marginBottom: 200
	},
	bullet: {
		display: "inline-block",
		margin: "0 2px",
		transform: "scale(0.8)",
	},
	title: {
		fontSize: 34,
		color: "#02a5df",
	},
	gridback: {
		backgroundColor: "#02a5df",
	},
	cardheaderfont: {
		fontSize: 15,
	},
	cardcon: {
		justifyContent: "center"
	},
	pos: {
		marginTop: 20,
	},
});



const nameList = ["Liam", "Noah", "William", "James", "Oliver", "Benjamin", "Elijah", "Lucas", "Mason", "Logan"];


const Home = (props) => {
	const [name, setName] = useState("");
	const [redirect, setRedirect] = useState(false);
	const classes = useStyles();
	const randomName = () => {

	}
	const randomNameHandler = (event) => {
		event.preventDefault();
		let randomIndex = Math.floor(Math.random() * Math.floor(10))
		setName(nameList[randomIndex]);
	}
	const onSubmitHandler = event => {
		event.preventDefault();
		alert(`submit name ${name}`);
		setRedirect(true);
	}
	const isRedirect = redirect ? <Redirect to={{pathname: '/home', state: {userName : name}}} /> : null;
	
	return (
		
		<Grid container direction="column" >
			{isRedirect}
			<Grid item container className={classes.gridback}>
				<Grid item xs={0} sm={2} />
				<Grid item xs={12} sm={8}>
					<Card className={classes.root} style={{ backgroundColor: "#FFFFFF", borderRadius: 10 }}>
						<CardHeader
							title="Dear Diary"
							classes={classes.cardheaderfont}
							titleTypographyProps={{ variant: "h6" }}
						/>
						<CardContent >
							<Grid container >
								<Grid item xs={0} sm={2}>
									{/* <TextField
										id="outlined-secondary"
										label="Username"
										variant="outlined"
										color="primary"
										required
										align="center"
									/> */}
								</Grid>
								<Grid item xs={12} sm={8} >
									<Grid item container direction="column" >

										<Grid item >
											<Typography
												className={classes.title}
												variant="h1"
												gutterBottom
												align="center"
											>
												Sign In
											</Typography>
										</Grid>
										<Grid item xs>
											<form
												id="login"
												// className={classes.form}
												noValidate
												onSubmit={onSubmitHandler}
											// onSubmit={handleSubmit}
											>
												<Grid item xs container alignItems="center" spacing={2}>
													<Grid item xs={10} >
														<TextField
															id="outlined-secondary"
															label="Username"
															variant="outlined"
															color="primary"
															required
															helperText="Required"
															fullWidth
															onChange={e => setName(e.target.value)}
															value={name}
														/>
													</Grid>
													<Grid item xs={2} >
														<Button onClick={randomNameHandler} size="small" align="center" variant="contained" color="primary" type="submit" style={{ borderRadius: 30 }}>
															Random
														</Button>
													</Grid>
												</Grid>
												<Grid item xs container justifyContent="center">
													<Grid item>
														<CardActions >
															<Button size="large" align="center" variant="contained" color="primary" type="submit" style={{ borderRadius: 30 }}>
																Continue
													</Button>
														</CardActions>
													</Grid>
												</Grid>
											</form>
										</Grid>

									</Grid>
								</Grid>
								<Grid item xs={0} sm={2}>
									{/* <TextField
										id="outlined-secondary"
										label="Username"
										variant="outlined"
										color="primary"
										required
										align="center"
									/> */}
								</Grid>
							</Grid>
						</CardContent>
					</Card>
				</Grid>
				<Grid item xs={0} sm={2} />
			</Grid>
		</Grid>
	);
};

export default Home;
