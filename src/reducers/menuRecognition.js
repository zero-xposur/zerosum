import axios from 'axios';

const GOT_MENU = 'GOT_MENU';

const gotMenu = menu => ({
    type: GOT_MENU,
    menu,
});

export const menuReducer = (state = [], action) => {
    switch (action.type) {
        case GOT_MENU:
            return action.menu;
        default:
            return state;
    }
};

export const getMenu = image => {
    return dispatch => {
        console.log(image);
        return axios.post(`/api/search/menu`, { image }).then(menu => {
            return dispatch(
                gotMenu(menu.data[0].fullTextAnnotation.pages[0].blocks)
            );
        });
    };
};
