import { render, screen, fireEvent } from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node'
import Users from '../Users';


// Mock BE API
const mockResponse = [
  { name: "eko", email: "eko@oke.com" },
  { name: "sia", email: "sia@oke.com" },
]

const handlers = [
  rest.get("https://jsonplaceholder.typicode.com/users", (req, res, ctx) => {
    return res(ctx.json(mockResponse))
  })
]

const mockedServer = setupServer(...handlers)

beforeAll(() => mockedServer.listen())
afterEach(() => mockedServer.resetHandlers())
afterAll(() => mockedServer.close())

it("should render user list", async () => {
  render(<Users />)
  const userItemElements = await screen.findAllByTestId("user-item")
  console.log(userItemElements.length)
  expect(userItemElements[0]).toBeInTheDocument();
})