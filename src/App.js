import jpImg from './assets/artyou_logo_site_200.png';
import jpImg from './assets/BssBbbX.png'
import './styles.css';
import { useState } from 'react';

function App() {
  const [email, setemail] = useState("")
  const [password	, setPassword] = useState("")

  return (
    
    <div className="container"> 
    <div>
    <img src={jpImg} alt="imagem" />
    </div>
     <div className="container-login">
      <div className="wrap-login">
          <form action=" " className="login-form">
            <span className="login-form-title">The Culture Platform</span>
            <span className="login-form-title">
              <img src={jpImg} alt="imagem" />
            </span>
            <div className="wrap-input">
              <input 
              className="input"
              type="email"
              value={email} 
              onChange={e => setemail(e.target.value)}
               />
              <span className="focus-input" data-placeholder="Email"></span>
              </div>

              <div className="wrap-input">
              <input
               className="input"
               type="password" 
               value={password}
               onChange={e => setPassword(e.target.value)}
               />
              <span className="focus-input" data-placeholder="password"></span>
              </div>

                <div className="container-login-form-btn">
                  <button className="login-form-btn">Login</button>
                </div>

                <div className="text-center">
                    <span className="txt1">Don't have an account?</span>
                    
                    <a className="txt2" href="#"> register</a>
                </div>

            </form>
        </div>
      </div>
    </div>  
  );
}

export default App;
