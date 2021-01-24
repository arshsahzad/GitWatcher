import LocalStorageControl from "../../services/localStorage";
import React from "react";
import GetApiData from "../../services/api";
import {Link} from 'react-router-dom'

// Style
import {
	Main,
	DivProfileSearch,
	ErrScreen,
	DivVisitedProfiles,
	Header,
} from "./StyleMain";

const LocalSt = new LocalStorageControl();

function App() {
	const searchinput = React.useRef({});
	const [profile, setProfile] = React.useState(undefined);
	const [profileHistory, setProfileHistory] = React.useState(
		LocalSt.getitems(),
	);
	const [ErrorScreen, setErrorScreen] = React.useState(false);

	React.useEffect(() => {
		setProfileHistory(LocalSt.getitems());
	}, [profile]);

	const handleProfiles = React.useCallback(async (event) => {
		setErrorScreen(false);
		event.preventDefault();
		let valueinput = searchinput;

		if (valueinput.current.value) {
			let data = await GetApiData(valueinput.current.value);

			if (data) {
				LocalSt.Setlast(data.login, data.avatar_url);
				setProfile(data);
			} else {
				setProfile(null);
				setErrorScreen(true);
			}
		} else {
			setProfile(null);
		}

		valueinput.current.value = '';

	});

	return (
		<>
			<Header>
				<h2>GitWatcher: Github Profile Search/h2>

			</Header>
			<Main>
				<form onSubmit={handleProfiles}>
					<input
						ref={searchinput}
						type="text"
						placeholder="Search by Username"
					/>
					<button></button>
				</form>

				{profile && (
					<ProfileSearchDiv
						login={profile.login}
						avatar_url={profile.avatar_url}
						id={profile.id}
					/>
				)}

				{ErrorScreen && <ErrorScreenDiv />}
			</Main>

			<VisitedProfiles items={profileHistory} />
		</>
	);
}

function ProfileSearchDiv({ login, avatar_url, id }) {
	return (
		<DivProfileSearch>
			<Link to={"/profile/" + login}>
				<img src={avatar_url} alt={login} />

				<section>
					<h5>Username</h5>
					<h3>{login}</h3>
				</section>

				<section>
					<h5>ID</h5>
					<h3>{id}</h3>
				</section>
			</Link>
		</DivProfileSearch>
	);
}

function ErrorScreenDiv() {
	return (
		<ErrScreen>
			<h1>Profile Not Found</h1>
		</ErrScreen>
	);
}

function VisitedProfiles({ items }) {
	return (
		<DivVisitedProfiles>
			<h3>Last Visited Profiles</h3>
			<div>
				{items &&
					items.map((item) => {
						return (
							<Link key={item.user + Date.now() * Math.random() * 5} to={"/profile/" + item.user}>
								<img src={item.avatar_url} alt={item.user} />
								<h3>{item.user}</h3>
							</Link>
						);
					})}
			</div>
		</DivVisitedProfiles>
	);
}

export default App;
