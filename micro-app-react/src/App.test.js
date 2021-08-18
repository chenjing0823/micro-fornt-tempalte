/*
 * @Author: jing.chen
 * @Date: 2021-08-16 11:06:15
 * @LastEditors: jing.chen
 * @LastEditTime: 2021-08-16 13:34:35
 * @Description: 
 */
import { render, screen } from '@testing-library/react';
import App from './App.jsx';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
