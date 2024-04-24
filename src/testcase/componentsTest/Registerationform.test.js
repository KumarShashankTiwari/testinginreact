
import { render, screen } from "@testing-library/react"
import RgisterationForm from "../../components/registerationform"

test('RgisterationForm UI Input Label',()=>{
    render(<RgisterationForm/>)
    let testval=screen.getByLabelText('Name');
    expect(testval).toBeInTheDocument();
})

test('RgisterationForm UI Input',()=>{
    render(<RgisterationForm/>)
    let testval=screen.getByRole('textbox');
    expect(testval).toBeInTheDocument();
 
})

test('RgisterationForm UI Input plcaceholder',()=>{
    render(<RgisterationForm/>)
    let testval=screen.getByPlaceholderText('Please enter name');

    expect(testval).toBeInTheDocument();
    expect(testval).toHaveAttribute('id','Name');
    expect(testval).toHaveAttribute('type','text');
    expect(testval).toHaveAttribute('value','shashank');
})

