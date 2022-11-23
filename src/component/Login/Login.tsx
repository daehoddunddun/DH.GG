import React, { useState } from 'react';
import './Login.css'

function Login() {
    type LoginType = {userId: string | undefined, userPw: string | undefined}
    const [userInput, setUserInput] = useState({userId : "", userPw: ""})

    const inputLoginData = (e :React.FormEvent<HTMLInputElement>) => {
        setUserInput({...userInput, [e.currentTarget.name]: e.currentTarget.value})
    }
    const loginSumbit = () => {
        let testLoginInfo :LoginType = {userId : "eogh773", userPw : "eogh12"}
        console.log("유저인풋: ",userInput)
        console.log("로그인 데이터: ", testLoginInfo)
        if(userInput.userId === testLoginInfo.userId && userInput.userPw === testLoginInfo.userPw){
            console.log("로그인 성공")
        }else{
            console.log("로그인 실패")
        }
    }
    
  return (
    <div className="App">
        <div id="layoutAuthentication">
            <div id="layoutAuthentication_content">
                <main>
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-5">
                                <div className="card shadow-lg border-0 rounded-lg mt-5">
                                    <div className="card-header"><h3 className="text-center font-weight-light my-4">Login</h3></div>
                                    <div className="card-body">
                                        <form>
                                            <div className="form-floating mb-3">
                                                <input className="form-control" name='userId' type="email" placeholder='userId' onChange={inputLoginData}/>
                                                <label >Email address</label>
                                            </div>
                                            <div className="form-floating mb-3">
                                                <input className="form-control" name='userPw' type="password" placeholder='userPw' onChange={inputLoginData} />
                                                <label >Password</label>
                                            </div>
                                            <div className="form-check mb-3">
                                                <input className="form-check-input" id="inputRememberPassword" type="checkbox" value="" />
                                                <label className="form-check-label" >Remember Password</label>
                                            </div>
                                            <div className="d-flex align-items-center justify-content-between mt-4 mb-0">
                                                <a className="small" href="password.html">Forgot Password?</a>
                                                <p className="btn btn-primary" onClick={loginSumbit}>Login</p>
                                            </div>
                                        </form>
                                    </div>
                                    <div className="card-footer text-center py-3">
                                        <div className="small"><a href="register.html">Need an account? Sign up!</a></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
            <div id="layoutAuthentication_footer">
                <footer className="py-4 bg-light mt-auto">
                    <div className="container-fluid px-4">
                        <div className="d-flex align-items-center justify-content-between small">
                            <div className="text-muted">Copyright &copy; My Website 2022</div>
                            <div>
                                <a href="#">Privacy Policy</a>
                                &middot;
                                <a href="#">Terms &amp; Conditions</a>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    </div>
  );
}

export default Login;
