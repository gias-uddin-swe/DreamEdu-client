import React, { useContext, useMemo, useState } from "react";
import {
  useStripe,
  useElements,
  CardNumberElement,
  CardCvcElement,
  CardExpiryElement,
} from "@stripe/react-stripe-js";
import "./payment.css";
import { UserContext } from "../../App";

const useOptions = () => {
  const options = useMemo(
    () => ({
      style: {
        base: {
          fontSize: "16px",
          color: "#424770",
          letterSpacing: "0.025em",
          fontFamily: "Source Code Pro, monospace",
          "::placeholder": {
            color: "#aab7c4",
          },
        },
        invalid: {
          color: "#9e2146",
        },
      },
    }),
    []
  );

  return options;
};

const SplitForm = ({ handlePayment }) => {
  const [user, setUser] = useContext(UserContext);

  const stripe = useStripe();
  const elements = useElements();
  const options = useOptions();

  const [error, setError] = useState(null);
  const [show, setShow] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const payload = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardNumberElement),
    });
    // setError(payload.error.message);
    if (payload.paymentMethod) {
      setShow(true);
      setError("");
    }
    if (payload.error) {
      setShow(false);
      setError(payload.error.message);
    }
    console.log("[PaymentMethod]", payload);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Card number
        <CardNumberElement
          className="card"
          options={options}
          onReady={() => {
            console.log("CardNumberElement [ready]");
          }}
          onChange={(event) => {
            console.log("CardNumberElement [change]", event);
          }}
          onBlur={() => {
            console.log("CardNumberElement [blur]");
          }}
          onFocus={() => {
            console.log("CardNumberElement [focus]");
          }}
        />
      </label>
      <br />
      <label>
        Expiration date
        <CardExpiryElement
          className="card"
          options={options}
          onReady={() => {
            console.log("CardNumberElement [ready]");
          }}
          onChange={(event) => {
            console.log("CardNumberElement [change]", event);
          }}
          onBlur={() => {
            console.log("CardNumberElement [blur]");
          }}
          onFocus={() => {
            console.log("CardNumberElement [focus]");
          }}
        />
      </label>
      <br />
      <label>
        CVC
        <CardCvcElement
          className="card"
          options={options}
          onReady={() => {
            console.log("CardNumberElement [ready]");
          }}
          onChange={(event) => {
            console.log("CardNumberElement [change]", event);
          }}
          onBlur={() => {
            console.log("CardNumberElement [blur]");
          }}
          onFocus={() => {
            console.log("CardNumberElement [focus]");
          }}
        />
      </label>
      <br />

      <button
        onClick={() => handlePayment(show)}
        className="pay-btn"
        type="submit"
        disabled={!stripe}
      >
        Pay
      </button>
      {show ? (
        <p style={{ color: "green" }}>
          you have successfully Done your Payment
          <br />
          Thank you for
        </p>
      ) : (
        <p style={{ color: "red" }}>{error}</p>
      )}
    </form>
  );
};

export default SplitForm;
