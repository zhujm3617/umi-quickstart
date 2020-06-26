import { Effect, Reducer, Subscription, request } from 'umi';
import { fromJS } from 'immutable'
import reducer from '../pages/modules/pic-slide-img/reducer'

export interface ShopModelState {
  loading: boolean;
  modules: any;
  modulesImmut: any;
  moduleMd5: any;
}

export interface ShopModelType {
  namespace: 'shop';
  state: ShopModelState;
  effects: {
    init: Effect;
  },
  reducers: {
    initData: Reducer<ShopModelState, any>;
    changeDate: Reducer<ShopModelState, any>;
    save: Reducer<ShopModelState, any>;
    cancel: Reducer<ShopModelState, any>;
  };
  subscriptions: { setup: Subscription };
}

const ShopModel: ShopModelType = {
  namespace: 'shop',
  state: {
    loading: true,
    modules: {},
    modulesImmut: {},
    moduleMd5: {}
  },
  effects: {
    *init({}, { put, call, select }) {
      const loading = yield select((state: any) => state.shop.loading);

      if(loading) {
        const { modules } = yield request('/shop/modules/list');
        yield put({ type: 'initData', modules });
      }
    }
  },
  reducers: {
    initData(state, action) {
      const { modules } = action;
      let newState = fromJS(state);
      newState = newState.set('loading', false).set('modules', modules).set('modulesImmut', modules);
      return newState.toJS();
    },
    save(state, action) {
      const { id } = action;
      let newState = fromJS(state);
      newState = newState.setIn(['modulesImmut', id], newState.getIn(['modules', id]));
      return newState.toJS();
    },
    cancel(state, action) {
      const { id } = action;
      let newState = fromJS(state);
      newState = newState.setIn(['modules', id], newState.getIn(['modulesImmut', id]));
      return newState.toJS();
    },
    ...reducer
  },
  subscriptions: {
    setup({ dispatch, history }) {
      // window.shopHistory = history;
      history.listen(({ pathname }) => {
        if(pathname == '/modules/index') {
          dispatch({ type: 'init' });
        }
      })
    }
  }
}

export default ShopModel;
