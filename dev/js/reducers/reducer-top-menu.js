export default function (state = null, action) {
    switch (action.type) {
        case 'TOPBAR_TOGGLED':
            return action.payload;
            break;
    }
    return state;
}