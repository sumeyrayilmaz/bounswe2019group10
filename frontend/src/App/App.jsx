import React from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import 'antd/dist/antd.css';
import { history } from '../_helpers';
import { alertActions } from '../_actions';
import { PrivateRoute } from '../_components';
import { HomePage } from '../HomePage';
import { OpeningPage } from '../OpeningPage';
import { ProfilePage } from '../ProfilePage';
import { QuizPage } from '../QuizPage';
import { WritingPage } from '../WritingPage';
import { WritingReviewPage } from '../WritingReviewPage';
import { CoursesPage } from '../CoursesPage';
import { SearchPage } from '../SearchPage';
import { NotificationsPage } from '../NotificationsPage';
import { WritingTopicPage } from '../WritingTopicPage';
import { MyWritingsPage } from '../MyWritingsPage';
import { MessagingPage } from '../MessagingPage';

class App extends React.Component {
    constructor(props) {
        super(props);

        history.listen((location, action) => {
            // clear alert on location change
            this.props.clearAlerts();
        });
    }

    render() {
        return (
            <div>
                <Router history={history}>
                    <Switch>
                        <PrivateRoute exact path="/" component={HomePage} />
                        <Route path="/opening" component={OpeningPage} />
                        <PrivateRoute exact path="/quiz" component={QuizPage} />
                        <PrivateRoute exact path="/courses" component={CoursesPage} />
                        <PrivateRoute exact path="/profile-page" component={ProfilePage} />
                        <PrivateRoute exact path="/search" component={SearchPage} />
                        <PrivateRoute exact path="/notifications" component={NotificationsPage} />
                        <PrivateRoute exact path="/messaging" component={MessagingPage} />
                        <PrivateRoute exact path="/writing-page" component={WritingPage} />
                        <PrivateRoute exact path="/writing-review-page" component={WritingReviewPage} />
                        <PrivateRoute exact path="/mywritings-page" component={MyWritingsPage} />
                        <PrivateRoute exact path="/writing-topic-suggest-page" component={WritingTopicPage} />
                        <Redirect from="*" to="/" />
                    </Switch>
                </Router>
            </div>
        );
    }
}

function mapState(state) {
    const { alert } = state;
    return { alert };
}

const actionCreators = {
    clearAlerts: alertActions.clear
};

const connectedApp = connect(mapState, actionCreators)(App);
export { connectedApp as App };