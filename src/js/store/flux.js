const getState = ({ getStore, setStore }) => {
	const APIurl = "https://assets.breatheco.de/apis/fake/contact/agenda/pluco";
	return {
		store: {
			contacts: []
			//Your data structures, A.K.A Entities
		},
		actions: {
			getAllContacts: async () => {
				try {
					let response = await fetch(APIurl);
					if (response.ok) {
						contacts = await response.json();
					} else if (response.stats == 404) {
						alert("no contacts found!!");
					}
				} catch (error) {
					console.log("something failed");
					console.log(error);
				}
				setStore({
					contacts: contacts
				});
			}
			//(Arrow) Functions that update the Store
			// Remember to use the scope: scope.state.store & scope.setState()
		}
	};
};

export default getState;
