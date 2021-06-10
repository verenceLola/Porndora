const formatDate = (dateString: string) : string => {
	const date: Date = new Date(dateString);

	return new Intl.DateTimeFormat("en-US").format(date);
};

export default formatDate;
