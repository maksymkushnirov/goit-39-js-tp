const refs = {
	searchForm: document.querySelector(".search-form"),
	headerErrorText: document.querySelector(".header-error__text"),
	section: document.querySelector(".section"),
};

const onFormSubmit = () => {
	refs.searchForm.addEventListener("submit", event => {
		event.preventDefault();
		const form = event.currentTarget;
		const inputValue = form.elements.query.value;
		if (!inputValue) {
			refs.headerErrorText.textContent = "Search result not successfull. Enter correct movie name and try again";
			return;
		}
		console.log(inputValue);
		if (inputValue) {
			refs.headerErrorText.textContent = "";
			refs.section.innerHTML = "";
			startSpin();
			apiServices
				.fetchByQuery(inputValue, 1)
				.then(data => {
					if (data.length === 0) {
						refs.headerErrorText.textContent = "Search result not successfull. Enter correct movie name and try again";
						stopSpin();
						throw new Error("Search result not successfull. Enter correct movie name and try again");
					}
					homePage(data, refs.section);
				})
				.then(() => stopSpin())
				.then(() => clickListener())
				.catch(error => {
					console.log(error);
				});
			Pagination.clear();
			form.reset();
		}
	});
};

export default onFormSubmit;
