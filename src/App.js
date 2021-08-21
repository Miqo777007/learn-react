 import './App.css';
 import History from './components/history/history';
 import Nkar from './components/images/nkar.jpeg'
 import Section from './components/section/section';
 import Footer from'./components/footer/footer';
//  import Home from'./components/home/home';
//  import About from './components/about/about';
//  import Contact from './components/contact/contact';
//  import Next from './components/next/next';
//  import Title from './components/title'
//  import List from './components/title1'
 

function Title() {
  return (
    <>
      <History/> 
        <img src = {Nkar} alt = {'code'} width = '267px'/>
        <img src = {process.env.PUBLIC_URL+'/nkarner/coding.jpeg'}/>  
           <Section title = 'First section' content = 'React Redux' src = 'https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=500&w=200'></Section>
           <Footer address = 'City:Yerevan' phone = 'Tel:+(374)41055008' email = 'e-mail:miqhovhannisyan0@gmail.com'/>
                  {/* <Home></Home>
                  <About></About>
                  <Contact></Contact>
                  <Next></Next> */}
     
    </>
  );
}

export default Title;
