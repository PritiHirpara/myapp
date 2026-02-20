import { createRoot } from 'react-dom/client'
// import Home from './Home'
// import About from './About'
import 'bootstrap/dist/css/bootstrap.min.css';
// import "./assets/App.css";
// import Services from './Services';
// import Products from './Products';
// import { GetMighty } from './GetMighty';
// import Counter from './Counter';
// import UseStateExample from './UseStateExample';
// import UseState_HooksExample from './UseState_HooksExample';
// import StudentDashboard from './StudentDashboard';
// import StudentEx from './StudentEx';
// import UseRefEx from './useRefEx';
// import UseRef_VideoPlayerEx from './UseRef_VideoPlayerEx';
// import { DashBoard } from './DashBoard';
// import {BrowserRouter,Routes,Route} from 'react-router-dom';
// import { Menu } from './Menu';
// import { Login } from './Login';
// import { Contact } from './Contact';
// import { Error404 } from './Error404';
// import { Result } from './Result';
// import { Component1 } from './component1';
// import { ThemeProvider } from 'react-bootstrap';
// import ThemedApp from './ThemedApp';
// import { Condition } from './Condition';
import { ListExample } from './listExample';
import { PostApi } from './PostApi';
import { Tailwindfile } from './Tailwindfile';
import { Lat_long_get } from './Lat_long_get';

// import { TodoListExample } from './TodoListExample';
// import { GetProduct_Api } from './GetProduct_Api';
// import { PostApi } from './PostApi';
// import { EditEmployee } from './EditEmployee';
// import { EmlCalculater } from './EmlCalculater';
// import { DarkLight } from './DarkLight';
// import { Provider } from 'react-redux';
// import mystore from './mystored';
// import { Reduxex } from './Reduxex';
// import { Redux_StudentEx } from './Redux_StudentEx';
// import StudStored from './StudStored';
// createRoot(document.getElementById('root')).render(
// <>
//     <BrowserRouter>
//         <Menu/>
//         <Routes>
//             <Route path='/' element={<DashBoard/>}></Route>
//             <Route path='/dashboard' element={<DashBoard/>}></Route>
//             <Route path='/login' element={<Login/>}></Route>
//             <Route path='/contact' element={<Contact/>}></Route>
//             <Route path='/about' element={<About/>}></Route>
//             <Route path='*' element={<Error404/>}></Route>
//             <Route path='/result/:firstname/:age' element={<Result/>}></Route>
//             <Route path='/GetProduct_Api' element={<GetProduct_Api/>}></Route>
//             <Route path='/EditEmployee/:id' element={<EditEmployee/>}></Route>

//         </Routes>
//         {/* footer */}
//     </BrowserRouter>
// </>)
createRoot(document.getElementById('root')).render(<Lat_long_get/>)
// createRoot(document.getElementById('root')).render(
//     <Provider store={StudStored}>
//         <Redux_StudentEx/>
//     </Provider>
// )
