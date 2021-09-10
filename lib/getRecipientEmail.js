const getRecipientEmail = (users, userLoggedIn) =>
  users?.filter((usersToFilter) => usersToFilter !== userLoggedIn?.email)[0];

export default getRecipientEmail;
