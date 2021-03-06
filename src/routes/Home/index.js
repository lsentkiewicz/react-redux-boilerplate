import { injectReducer } from '../../reducers';

export default (store) => ({
  path: '',
  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      const Home = require('./containers/HomeContainer').default;
      const reducer = require('./modules/Home').default;

      injectReducer(store, { key: 'home', reducer });
      cb(null, Home);
    }, 'Home');
  },
});
