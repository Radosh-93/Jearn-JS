import React from 'react';
import ReactDOM from 'react-dom'
import { render } from '@testing-library/react';
import AppMain from './App';

/*test('renders learn react link', () => {
  const { getByText } = render(<AppMain />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});*/

it ('render without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AppMain/>, div);
  ReactDOM.unmountComponentAtNode(div)
})