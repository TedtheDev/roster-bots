import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import styled from 'styled-components';
import Home from './pages/Home';

import registerServiceWorker from './registerServiceWorker';

import CreateRoster from './pages/home/CreateRoster';

const App = styled.div`
    height: 100%;
    width: 100%;
    display: grid;
    grid-template: 10% 90% / 20% 75% 5%;
    grid-template-areas:
        "header header header"
        "actions content .";
`;

const ActionsDiv = styled.div`
    grid-area: actions;
`;

const HeaderDiv = styled.div`
    grid-area: header;
    background-color: grey;
    position: fixed;
    width: 100%;
    height: 10%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const ContentDiv = styled.div`
    grid-area: content;
`;

ReactDOM.render(
    <Provider store={store}>
        <App>
            <HeaderDiv>Roster Bots</HeaderDiv>
            <ActionsDiv>
                <CreateRoster />
            </ActionsDiv>
            <ContentDiv>
                <Home />
            </ContentDiv>
        </App>
    </Provider>
    , 
    document.getElementById('root')
);

registerServiceWorker();
