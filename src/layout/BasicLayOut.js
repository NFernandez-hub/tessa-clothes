import { WhatsAppButton } from '../components/WhatsAppButton';
import { ReponsiveNavbar } from './../components/ResponsiveNavbar';



export function BasicLayOut(props) {

    const { carrito, setCarrito } = props;

    return (
        <div>


            <ReponsiveNavbar cart={carrito} setCart={setCarrito}></ReponsiveNavbar>
            <WhatsAppButton className="wppbtn">
            </WhatsAppButton>
        </div>
    )
}