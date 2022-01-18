import { PayPalButton } from "react-paypal-button-v2";
import { formatPrice } from "../utils/helpers";
import { useCartContext } from "../context/cart_context";

const PaypalForm = () => {
  const { total_amount, shipping_fee } = useCartContext();
  return (
    <>
      <p>TOTAL PRICE: {formatPrice(total_amount + shipping_fee)}</p>
      <PayPalButton
        options={{
          clientId: `${process.env.REACT_APP_PAYPAL_CLIENT_ID}`,
          currency: "USD",
        }}
        amount={total_amount / 100}
        onSuccess={(details, data) => {
          alert("Transaction completed by " + details.payer.name.given_name);

          console.log({ details, data });
        }}
      />
    </>
  );
};
export default PaypalForm;
