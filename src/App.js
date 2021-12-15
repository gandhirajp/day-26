import logo from './logo.svg';
import './App.css';
import Raj from './Box';



function App() {

// this is card details
  let Details = [
    {
      plan: "BASIC",
      team:"For Team of 3-5 Members",
      currency: "$",
      monthly : 28,
      peoried:"/mo",
      medium:"$20",
      col:"btn btn-success-gradiant btn-md text-white btn-block",

      features: [
        {
          name: "Perfect of Small Team",
        },
        {
          name: "Unlimited Invoices",
         
        },
        {
          name: "Project Management",
         
        },
        {
          name: "&nbsp;",
        },
        {
          name: "&nbsp;",
        },
       
      ]
    },
    {
      prop:"Popular",
      plan: "INTERMEDIATE",
      team:"For Team of 5-10 Members",
      currency: "$",
      monthly : 39,
      peoried:"/mo",
      medium:"$30",
      col:"btn btn-danger-gradiant btn-md text-white btn-block",

      features: [
        {
          name: "Perfect of Small Team",
        },
        {
          name: "Unlimited Invoices",
         
        },
        {
          name: "Project Management",
         
        },
        {
          name: "Team Management",
        },
        {
          name: "&nbsp;",
        },
       
      ]
    },
    {
      plan: "HIGH CLASS",
      team:"For Team of 10-25 Members",
      currency: "$",
      monthly : 58,
      peoried:"/mo",
      medium:"$50",
      col:"btn btn-success-gradiant btn-md text-white btn-block",

      features: [
        {
          name: "Perfect of Small Team",
        },
        {
          name: "Unlimited Invoices",
         
        },
        {
          name: "Project Management",
         
        },
        {
          name: "Team Management",
        },
        {
          name: "Time Tracking",
        },
       
      ]
    },
    {
      
      plan: "SUPREME",
      team:"For Team of 25-100 Members",
      currency: "$",
      monthly : 99,
      peoried:"/mo",
      medium:"$80",
      col:"btn btn-success-gradiant btn-md text-white btn-block",

      features: [
        {
          name: "Perfect of Small Team",
        },
        {
          name: "Unlimited Invoices",
         
        },
        {
          name: "Project Management",
         
        },
        {
          name: "Team Management",
        },
        {
          name: "Time Tracking",
        },
       
      ]
    }
    
  ];
  return (
    <div className="pricing1 py-5 bg-light">
      <div className='container'>
        <div className="row justify-content-center mt-5">
          {
            Details.map(pro => <Raj data={pro}></Raj>)
          }

        </div>
      </div>

    </div>
  );
}

export default App;
