import React, { Component } from "react";

import DiaryCard from "../../../components/DiaryCard/DiaryCard";
import AppHeader from "../../../components/Header/AppHeader";

class Diary extends Component {
	render() {
		return (
			<React.Fragment>
				<AppHeader />
				<DiaryCard title="mama" user="madu" desc="ljfskjflsdfsdlfsdfjsdjfdfk" />
			</React.Fragment>
		);
	}
}

export default Diary;
