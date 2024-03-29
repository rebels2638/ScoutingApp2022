import {
	StyleSheet,
	View
} from "react-native";
import { Text } from "../../Components/Themed/Text";

import CustomTextBox from "../../Components/Utility/CustomTextBox";
import Timer from "../../Components/OneUse/Timer.js";
import ClimbPosition from "../../Components/OneUse/ClimbPosition.js";
import ScoutingColors from "../../Config/ScoutingColors";
import { useDispatch } from "react-redux";
import { setDefault } from "../../Redux/Features/dataSlice.js";
import BoolButton from "../../Components/Buttons/BoolButton.js";
import { useTheme } from "@react-navigation/native";

export default function Endgame() {
	const dispatch = useDispatch();
	const { colors } = useTheme();
	const endgameID = "EndgameType";

	// set default value
	dispatch(setDefault([endgameID, 0]));

	return (
		<View style={[styles.container, {backgroundColor: colors.background}]}>
			<Text style={{ textAlign: "center", fontSize: 35, fontWeight: "bold" }}>Endgame</Text>

			<View style={[styles.endgameContainer, {borderColor: colors.border, backgroundColor: colors.card}]}>
				<View style={{flexDirection: "row", justifyContent: "space-evenly"}}>
					<View style={{justifyContent: "space-evenly", alignItems: "center"}}>
						<BoolButton id="FailedClimbPosition" width={120} bgc="red">Failed</BoolButton>
						<Timer id="Time"/>
					</View>

					<ClimbPosition id="ClimbPosition" bgc="orange" />
				</View>
				
				
				


				<View style={styles.climbComments}>
					<Text style={{ fontWeight: "bold", fontSize: 20 }}>Comments</Text>
					<Text style={{ fontSize: 12, textAlign: "center" }}>
							Add any comments that you feel are useful. Do they attempt to climb but fall?
							Do they get in the way of other robots? Do they swing a lot on the climb?
							Anything else that shows evidence of good/poor performance?
					</Text>
					<CustomTextBox
						multi={true}
						id="EndgameComments"
						width={900}
						height={250}
						placeholder="Type your comments here..."
						borderRadius={10}
					/>
				</View>
			</View>
		</View>
	);
	
}

const styles = StyleSheet.create({
	climbComments: {
		flex: 1,
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
		margin: 30
	},
	climbPosition: {
		flex: 1,
		flexDirection: "column",
		alignItems: "center"
	},
	container: {
		paddingHorizontal: 50,
		paddingVertical: 20
	},
	endgameContainer: {
		alignItems: "center",
		borderRadius: 10,
		borderWidth: StyleSheet.hairlineWidth,
		padding: 20
	}
});