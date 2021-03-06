import {
	StyleSheet,
	Text,
	View,
	Image
} from "react-native";

import Incrementer from "../../Components/Utility/Incrementer.js";
import CustomTextBox from "../../Components/Utility/CustomTextBox.js";
import RadioButton from "../../Components/Buttons/RadioButton.js";
import ScoutingColors from "../../Config/ScoutingColors";
import { useSelector } from "react-redux";
import { selectID } from "../../Redux/Features/dataSlice.js";
import BoolButton from "../../Components/Buttons/BoolButton.js";

export default function MatchInfoContainer() {
	const selectedTeam = useSelector(selectID("Team"));

	return (
		<View style={styles.container}>
			<Text style={{ textAlign: "center", fontSize: 35, fontWeight: "bold" }}>Match Info</Text>

			<View style={styles.matchInfoContainer}>
				<View style={styles.piecesContainer}>
					<View style={styles.inputContainer}>
						<Text style={styles.bold}>Team Number: </Text>
						<View style={{ flex: 1, paddingLeft: 5 }}>
							<CustomTextBox id="TeamNumber" placeholder="2638" keyboardType="numeric" width={80} height={40} />
						</View>
					</View>

					<View style={styles.inputContainer}>
						<Text style={styles.bold}>Match Number: </Text>
						<Incrementer id="MatchNumber">
							<CustomTextBox id="MatchNumber" placeholder="2638" keyboardType="numeric" width={40} height={40} />
						</Incrementer>
					</View>

					<View style={styles.inputContainer}>
						<Text style={styles.bold}>Match Type: </Text>
						<RadioButton
							id="MatchType"
							data={["Practice", "Qualification", "Quarterfinal", "Semifinal"]}
							bgc="orange"
							segmentedButton
							forceOption
							default="Qualification"
							options={{
								flexDirection: "row",
							}}
						/>
					</View>

					<View style={styles.inputContainer}>
						<Text style={styles.bold}>Scouters: </Text>

						<View style={{ flex: 1, paddingLeft: 5 }}>
							<CustomTextBox id="Scouters" placeholder="Name and Name" width={350} height={40} />
						</View>
					</View>
				</View>



				<View style={styles.piecesContainer}>
					<View style={styles.inputContainer2}>
						<Text style={styles.bold}>Starting Game Pieces</Text>
						<BoolButton id="StartingPieces" bgc="lime" width={160}>Has Game Piece</BoolButton>
						<View>
							<Image
								source={selectedTeam===1? require("../../Assets/redCargo2022.jpg") : require("../../Assets/blueCargo2022.jpg")}
								style={{ width: 150, height: 150 }}
							/>
						</View>
					</View>
				</View>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	bold: {
		fontSize: 17,
		fontWeight: "bold"
	},
	container: {
		backgroundColor: ScoutingColors.white,
		paddingHorizontal: 50,
		paddingVertical: 20
	},
	inputContainer: {
		flex: 1,
		flexDirection: "row",
		alignItems: "center",
		paddingVertical: 15
	},
	inputContainer2: {
		flex: 1,
		flexDirection: "column",
		alignItems: "center",
		paddingVertical: 15
	},
	matchInfoContainer: {
		flex: 1,
		flexDirection: "row",
		borderColor: ScoutingColors.black,
		borderWidth: StyleSheet.hairlineWidth,
		borderRadius: 10
	},
	piecesContainer: {
		flex: 1,
		paddingHorizontal: 30,
		paddingVertical: 10
	},
});