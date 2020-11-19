import { WhatsAppButton } from '../components/WhatsAppButton';
import { Navbar } from './../components/NavBar';

export function BasicLayOut(props) {

    const { carrito, setCarrito } = props;

    return (
        <div>
            <Navbar cart={carrito} setCart={setCarrito}>
            </Navbar>
            <WhatsAppButton className="wppbtn">
                </WhatsAppButton>           
        </div>
    )
}
