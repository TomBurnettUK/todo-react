import React from 'react';
import { connect } from 'react-redux';

import actions from 'actions';

export class Login extends React.Component {
  constructor(props) {
    super(props);

    this.onLogin = this.onLogin.bind(this);
  }
  
  onLogin() {
    const { dispatch } = this.props;

    dispatch(actions.startLogin());
  }
  
  render() {
    return (
      <div>
        <h1 className="page-title">Todo App</h1>
        <div className="row">
          <div className="columns small-centered small-10 medium-6 large-4">
            <div className="callout callout-auth">
              <h3>Login</h3>
              <p>
                Login with Github account below
              </p>
              <button className="button" onClick={this.onLogin}>Login with GitHub</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Login.propTypes = {
  dispatch: React.PropTypes.func
};

export default connect()(Login);