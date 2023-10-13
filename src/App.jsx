import React from "react";
import Invoice from "./components/Invoice";
import Header from "./components/Header";
import InvoiceDetails from "./components/InvoiceDetails";

export default function App() {
  return (
    <div className="container">
      <Invoice>
        <Header />
        <InvoiceDetails />
      </Invoice>
    </div>
  );
}
