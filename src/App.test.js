import {fireEvent, render, screen} from "@testing-library/react";
import ReservationForm from "./components/ReservationForm";
import userEvent from '@testing-library/user-event'

const mockUsedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockUsedNavigate,
}));

test('Rendering of the reservationform heading', () => {
    render(<ReservationForm/>);
    const headingElement = screen.getByText("Reserve a table");
    expect(headingElement).toBeInTheDocument();
});


test('form submition', async () => {
    // const user = userEvent.setup()


    render(<ReservationForm/>);

    const submitbutton = screen.getByRole("button", {name: "Reserve"})
    const time = screen.getByLabelText("time")
    const date = screen.getByLabelText("Date", {name: "date"})
    const guests = screen.getByRole("spinbutton", {name: "Number of people"})
    const occastion = screen.getByRole("combobox", {name: "Occasion"})
    const firstname = screen.getByRole("textbox", {name: "First name"})
    const lastname = screen.getByRole("textbox", {name: "Last name"})
    const email = screen.getByRole("textbox", {name: "E-mail"})
    const phonenumber = screen.getByRole("spinbutton", {name: "Phone number"})

    // fireEvent.change(time, {target: {value: "10:00"}});
    expect(submitbutton).toBeDisabled();

    fireEvent.change(date, {target: {value: "2025-07-22"}});
    await userEvent.selectOptions(time, ['17:00'])
    fireEvent.change(guests, {target: {value: "2"}});
    fireEvent.change(occastion, {target: {value: "Birthday"}});
    fireEvent.change(firstname, {target: {value: "John"}});
    fireEvent.change(lastname, {target: {value: "Doe"}});
    fireEvent.change(email, {target: {value: "bruh@gmail.com"}});
    fireEvent.change(phonenumber, {target: {value: "123456789"}});

    expect(submitbutton).toBeEnabled();
    expect(time).toHaveValue("17:00");
    expect(date).toHaveValue("2025-07-22")
    expect(guests).toHaveValue(2)
    expect(occastion).toHaveValue("Birthday");
    expect(firstname).toHaveValue("John");
    expect(lastname).toHaveValue("Doe");
    expect(email).toHaveValue("bruh@gmail.com")
    expect(phonenumber).toHaveValue(123456789)
    expect(submitbutton).toBeEnabled();


    expect(submitbutton).toBeEnabled();
    fireEvent.click(submitbutton);





});