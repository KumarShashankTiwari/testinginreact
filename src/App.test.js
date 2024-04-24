import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders learn react paragraph', () => {
  render(<App />);
  const linkElement = screen.getByText(/How hello/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders learn react image', () => {
  render(<App />);
  const linkElement = screen.getByAltText('insect');
  expect(linkElement).toBeInTheDocument();
});

test('renders learn react all in one', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
  const linkElement2 = screen.getByText(/How hello/i);
  expect(linkElement2).toBeInTheDocument();
  const linkElement3 = screen.getByAltText('insect');
  expect(linkElement3).toBeInTheDocument();
});



test('RgisterationForm UII',()=>{
  render(<App/>)
  let testval=screen.getByRole('textbox');
  expect(testval).toBeInTheDocument();
})