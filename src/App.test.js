import {fireEvent, render, screen} from "@testing-library/react";
import ReservationForm from "./components/ReservationForm";

test('Rendering of the reservationform heading', () => {
    render(<ReservationForm/>);
    const headingElement = screen.getByText("Reserve a table");
    expect(headingElement).toBeInTheDocument();
});


test('form submition', () => {
    render(<ReservationForm/>);

    const submitbutton = screen.getByRole("button", {name: "Reserve"})
    const time = screen.getByRole("combobox", {name: "time"})
    const date = screen.getByLabelText("Date", {name: "date"})
    const guests = screen.getByRole("spinbutton", {name: "Number of people"})
    const occastion = screen.getByRole("combobox", {name: "Occasion"})


    fireEvent.change(time, {target: {value: "10:00"}});
    fireEvent.change(date, {target: {value: "2025-07-22"}});
    fireEvent.change(guests, {target: {value: "2"}});
    fireEvent.change(occastion, {target: {value: "Birthday"}});

    expect(submitbutton).toBeInTheDocument();
    expect(time).toBeInTheDocument();
    expect(guests).toBeInTheDocument();
    expect(occastion).toBeInTheDocument();
    expect(date).toBeInTheDocument()

    fireEvent.click(submitbutton);

    expect(submitbutton).toBeDisabled();

});