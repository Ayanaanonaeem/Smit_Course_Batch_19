import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import landingData from "./constants/landingData";
import Features from "./components/Features";
import Testimonials from "./components/Testimonials";
import Pricing from "./components/Pricing";
import Footer from "./components/Footer";
import { useState } from "react";
import ExpenseTracker from "./components/ExpenseTracker";

function App() {
  const { features, testimonials } = landingData;
  const [type, setType] = useState("expense");
  const [amount, setAmount] = useState(0);
  const [transactions, settransactions] = useState([]);

  const handleSubmit = () => {
    settransactions([...transactions, { amount, type }]);
    // settransactions((prev)=>[...prev,{amount,type}])
  };
  const totalIncome=transactions.reduce((acc,trans)=>(
    trans.type=="income"? acc+Number(trans.amount):acc
  ),0)
  const totalExpense=transactions.reduce((acc,trans)=>(
    trans.type=="expense"? acc+Number(trans.amount):acc
  ),0)

  const balance=totalIncome-totalExpense

  return (
    <>
      <Header />
      <ExpenseTracker totalExpense={totalExpense} totalIncome={totalIncome} handleSubmit={handleSubmit} amount={amount} type={type} setAmount={setAmount} setType={setType} transactions={transactions} balance={balance}/>
      <Hero />
      <Features features={features} />
      <Testimonials testimonials={testimonials} />
      <Pricing />
      <Footer />
    </>
  );
}

export default App;
