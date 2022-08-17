import { render, screen, waitFor } from
    '@testing-library/react';
import Hotels from './Hotels';
import HotelsContext from
    '../context/HotelsContext';
import { BrowserRouter } from 'react-router-dom';

test(`The Hotels component should render a list of hotels`, async () => {
    const mockFunction = jest.fn()
    const wrapper = ({ children }) => (
        <BrowserRouter>
            <HotelsContext.Provider
                value={{
                    loading: false,
                    error: '',
                    hotels: [
                        {
                            id: 1, title: 'Test hotel 1',
                            thumbnail: ''
                        },
                        {
                            id: 2, title: 'Test hotel 2',
                            thumbnail: ''
                        },
                    ],
                    fetchHotels: mockFunction,
                }}
            >
                {children}
            </HotelsContext.Provider>
        </BrowserRouter>
    );
    render(<Hotels />, { wrapper });
    expect(screen.queryByText('Loading...')
    ).toBeNull();
    expect(screen.getAllByRole('link'
    ).length).toBe(2);
});