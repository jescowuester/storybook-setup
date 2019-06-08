import React, { useReducer, useEffect } from 'react';
import { withRouter } from 'next/router';
import { Nav } from 'components';
import { Main } from './styles';

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//reducer

const initialState = {
  menuIsOpen: true,
  isLarge: true,
  path: ''
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'changePath':
      return {
        ...state,
        isLarge: action.path === '/',
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
    dispatch({
      type: 'changePath',
      path: router.pathname
    });
  }, [router.pathname]);

  return (
    <>
      <Nav state={state} dispatch={dispatch} />
      <Main isLarge={state.isLarge}>
        {children}

        {!state.isLarge && <></>}
      </Main>
    </>
  );
};

export default withRouter(Layout);
