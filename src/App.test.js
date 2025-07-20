import {fireEvent, render, screen} from "@testing-library/react";
import ReservationForm from "./components/ReservationForm";
import userEvent from '@testing-library/user-event'

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

    fireEvent.change(date, {target: {value: "2025-07-22"}});
    // fireEvent.change(time, {target: {value: "10:00"}});

    await userEvent.selectOptions(time, ['10:00'])


    fireEvent.change(guests, {target: {value: "2"}});
    fireEvent.change(occastion, {target: {value: "Birthday"}});
    fireEvent.change(firstname, {target: {value: "John"}});
    fireEvent.change(lastname, {target: {value: "Doe"}});
    fireEvent.change(email, {target: {value: "bruh@gmail.com"}});
    fireEvent.change(phonenumber, {target: {value: "123456789"}});

    expect(submitbutton).toBeEnabled();
    expect(time).toHaveValue("10:00");
    expect(date).toHaveValue("2025-07-22")
    expect(guests).toHaveValue(2)
    expect(occastion).toHaveValue("Birthday");
    expect(firstname).toHaveValue("John");
    expect(lastname).toHaveValue("Doe");
    expect(email).toHaveValue("bruh@gmail.com")
    expect(phonenumber).toHaveValue(123456789)


    fireEvent.click(submitbutton);

    expect(submitbutton).toBeDisabled();

});