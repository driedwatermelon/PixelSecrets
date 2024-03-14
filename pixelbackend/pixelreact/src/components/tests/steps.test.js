import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import VerticalStepper from '../../pages/encode';

jest.mock('axios', () => ({
    post: jest.fn(() => Promise.resolve({ data: {} })),
  }));
  
describe('VerticalStepper component', () => {
  test('renders without crashing', () => {
    render(<VerticalStepper />);
  });

  test('allows file selection and progression to next step', async () => {
    render(<VerticalStepper />);
    const file = new File(['dummy content'], 'test.png', { type: 'image/png' });
    const inputFile = screen.getByLabelText('Choose File');
    fireEvent.change(inputFile, { target: { files: [file] } });
    expect(await screen.findByText('test.png')).toBeInTheDocument();
    fireEvent.click(screen.getByText('Next'));
    expect(await screen.findByLabelText('Select an algorithm')).toBeInTheDocument();
  });

  test('allows algorithm selection and progression to next step', async () => {
    render(<VerticalStepper />);
    fireEvent.change(screen.getByLabelText('Choose File'), {
      target: { files: [new File(['dummy content'], 'test.png', { type: 'image/png' })] },
    });
    fireEvent.click(screen.getByText('Next'));
    fireEvent.click(screen.getByRole('button', { name: 'ArrowDropDownIcon' }));
    fireEvent.click(screen.getByText('Least Significant Bit'));
    fireEvent.click(screen.getByText('Next'));
    expect(await screen.findByLabelText('Enter Password')).toBeInTheDocument();
  });

  test('allows password input and progression to next step', async () => {
    render(<VerticalStepper />);
    fireEvent.change(screen.getByLabelText('Choose File'), {
      target: { files: [new File(['dummy content'], 'test.png', { type: 'image/png' })] },
    });
    fireEvent.click(screen.getByText('Next'));
    fireEvent.click(screen.getByRole('button', { name: 'ArrowDropDownIcon' }));
    fireEvent.click(screen.getByText('Least Significant Bit'));
    fireEvent.click(screen.getByText('Next'));
    fireEvent.change(screen.getByLabelText('Enter Password'), { target: { value: 'testpassword' } });
    fireEvent.click(screen.getByText('Next'));
    expect(await screen.findByLabelText('View Decoded Text')).toBeInTheDocument();
  });

  test('allows form submission', async () => {
    render(<VerticalStepper />);
    fireEvent.change(screen.getByLabelText('Choose File'), {
      target: { files: [new File(['dummy content'], 'test.png', { type: 'image/png' })] },
    });
    fireEvent.click(screen.getByText('Next'));
    fireEvent.click(screen.getByRole('button', { name: 'ArrowDropDownIcon' }));
    fireEvent.click(screen.getByText('Least Significant Bit'));
    fireEvent.click(screen.getByText('Next'));
    fireEvent.change(screen.getByLabelText('Enter Password'), { target: { value: 'testpassword' } });
    fireEvent.click(screen.getByText('Next'));
    fireEvent.click(screen.getByText('Download'));
    // You may need to adjust this to wait for the download to complete depending on your implementation
    // You can mock axios post call to test the submission process completely
  });
});
