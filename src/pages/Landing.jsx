import Header from "../components/Header";
import Card from "../components/Card";
import { useLocation } from 'react-router-dom';
import { useState } from "react";
import { useEffect } from "react";
import TodoContainer from "../components/TodoContainer";

function Landing()
{
  //const data = useLocation()
  const location= useLocation()
  const user = location.state?.user

  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  useEffect(() => {
      const timer = setInterval(() => {
          setCurrentDateTime(new Date());
      }, 1000);

      return () => clearInterval(timer);
  }, []);

  const formatDate = (date) => {
      return date.toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric'
      });
  };

  const formatTime = (date) => {
      return date.toLocaleTimeString('en-US', {
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit'
      });
  };

      
  
  return(
    <>
    <div className='bg-black p-10'>
  <div className='bg-[#efefef] p-8 border rounded-md'>
    <Header username={user}/>
    <div className='flex gap-3 my-5 justify-between flex-wrap'>
    <Card bgcolor={"#8272DA"} title={"Streamline Daily Tasks"} subtitle={"Effortlessly manage your activities for better productivity"}/>
    <Card bgcolor={"#FD6663"} title={formatDate(currentDateTime)} subtitle={formatTime(currentDateTime)}/>
    <Card bgcolor={"#FCA201"} title={"Build Using"} subtitle={"React"}/>
    </div>

    <TodoContainer/>
  </div>

</div>
    </>
)
}

export default Landing