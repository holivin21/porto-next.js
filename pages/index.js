import { Box, Button, ChakraProvider, Grid, GridItem, Image, Text} from '@chakra-ui/react';
import Nav from './components/Nav.js';
import HomePage from './components/HomePage.js';
import AboutPage from './components/AboutPage.js';
import ContactPage from './components/ContactPage.js';
import ProjectPage from './components/ProjectPage.js';

export default function Home() {
  return (    
    <ChakraProvider>
        <style global jsx>{`
          ::-webkit-scrollbar {
            width: 6px;
          }
          
          ::-webkit-scrollbar-track {
            background-color: black;
          }
          
          ::-webkit-scrollbar-thumb {
            background-color: white;
            border-radius: 10px;
            border: 1px solid transparent;
            background-clip: content-box;
          }
          
          ::-webkit-scrollbar-thumb:hover {
            background-color: #a8bbbf;
          }
        `}</style>
      <div className="container">
        <Nav/>
        <HomePage/>
        <AboutPage/>
        <ProjectPage/>
        <ContactPage/>
      </div>
    </ChakraProvider>
  )
}
