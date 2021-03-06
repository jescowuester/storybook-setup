import React, { useReducer, useEffect } from 'react';
import { withRouter } from 'next/router';
import { Nav } from 'components';
import { Main } from './styles';

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//reducer

const initialState = {
  menuIsOpen: true,
  navIsLarge: true,
  path: ''
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'changePath':
      return {
        ...state,
        navIsLarge: [
          '/',
          '/history',
          '/liquor-store',
          '/contact',
          '/login'
        ].includes(action.path),
        path: action.path
      };
    case 'openMenu':
      return {
        ...state,
        menuIsOpen: true
      };
    case 'closeMenu':
      return {
        ...state,
        menuIsOpen: false
      };
    case 'toggleMenu':
      return {
        ...state,
        menuIsOpen: !state.menuIsOpen
      };
    default:
      throw new Error();
  }
};

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const Layout = ({ children, router }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    console.log(router.pathname);
    dispatch({
      type: 'changePath',
      path: router.pathname
    });
  }, [router.pathname]);

  return (
    <>
      <Nav state={state} dispatch={dispatch} />
      <Main navIsLarge={state.navIsLarge}>
        {children}

        {!state.navIsLarge && <></>}
      </Main>
    </>
  );
};

export default withRouter(Layout);
