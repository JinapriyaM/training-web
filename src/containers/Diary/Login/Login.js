import React from "react";

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

const Home = (props) => {
	const classes = useStyles();
	return (
		<Grid container direction="column">
			
			<Grid item container className={classes.gridback}>
				<Grid item xs={0} sm={2} />
				<Grid item xs={12} sm={8}>
					<Card className={classes.root} style={{ backgroundColor: "#FFFFFF" }}>
						<CardHeader
							title="Dear Diary"
							classes={classes.cardheaderfont}
							titleTypographyProps={{ variant: "h6" }}
						/>
						<CardContent >
							<Typography
								className={classes.title}
								variant="h1"
								align="center"
								gutterBottom
							>
								Sign In
							</Typography>
							<form
								id="login"
								className={classes.form}
                                noValidate
                                align="center"
								// onSubmit={handleSubmit}
							>
								<TextField
									id="outlined-secondary"
									label="Outlined secondary"
									variant="outlined"
                                    color="primary"
                                    required
								/>
								<CardActions align="center">
									<Button  size="small" variant="contained" color="primary" type="submit" style={{ borderRadius: 50 }}>
										Submit
									</Button>
								</CardActions>
							</form>
						</CardContent>
					</Card>
				</Grid>
				<Grid item xs={0} sm={2} />
			</Grid>
		</Grid>
	);
};

export default Home;
