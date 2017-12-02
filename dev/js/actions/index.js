export const selectUser = (user) => {
    console.log("You clicked on user: ", user.first);
    return {
        type: 'USER_SELECTED',
        payload: user
    }
};

export const handleToggle = (currentStatus) => {
    console.log("Topbar toggled!");
    return {
        type: 'TOPBAR_TOGGLED',
        payload: !currentStatus
    }
}
