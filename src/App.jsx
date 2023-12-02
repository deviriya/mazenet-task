import './App.scss'
import Ellipse from './assets/Ellipse.png';
import Angle from './assets/Rectangle.png';
import MazenetLogo from './assets/MazenetLogo.png';
import { Col, Row } from 'reactstrap';
import { useForm } from 'react-hook-form';

function App() {

  const { register, formState: { errors }, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    console.log(data)
    reset();
  }

  return (
    <div className='bgmain'>

      <div className='bg-cover'>
        <img src={Ellipse} className='lftImg img-fluid' />
        <img src={Angle} className='rgtImg img-fluid' />
      </div>
      <div className='loginFrm'>
        <Row>
          <Col md={6}>
            <div className='Lgnleft'>
              <div className='text-center'>
                <img src={MazenetLogo} className='img-fluid mb-4' />
                <h4 className='mb-5'>Login to your account.</h4>
              </div>

              <form onSubmit={handleSubmit(onSubmit)}>
                <div className='my-4'>
                  <input type='text' name='email' className='form-control' 
                  placeholder='Your email address' autoFocus
                    {...register("email", {
                      required: "Email is required.",
                      pattern: {
                        value: /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,
                        message: "Invalid email address."
                      }
                    })} />
                  {errors.email && <span className='errMsg'>* {errors.email.message}</span>}
                </div>
                <div className='my-4'>
                  <input type='password' className='form-control' placeholder='******'
                    name='password'
                    {...register("password", {
                      required: "Password is required.",
                      pattern: {
                        value: /^(?=\S*[a-z])(?=\S*[A-Z])(?=\S*\d)(?=\S*[^\w\s])\S{8,}$/,
                        message: "Password should be strong."
                      }
                    })} />
                  {errors.password && <span className='errMsg'>* {errors.password.message}</span>}
                </div>
                <div className='my-4 d-flex align-items-center'>
                  <input type="checkbox" id="remember" name="remember" value="Bike" className='mx-2' />
                  <label for="remember" type="button"> Remember username</label>
                </div>

                <div className='text-center'>
                  <button className='primaryBtn mb-3'>Submit</button><br />
                  <a href='#' className='text-danger'>Forgot Password?</a>
                </div>
              </form>
            </div>
          </Col>
          <Col md={6}>
            <div className='Lgnright'>
              <h3>Get future fit with the <br /> mostin-demand skills!</h3>
              <p>Experience immersive learning with PRISM</p>
            </div>
          </Col>
        </Row>
      </div>

      <div className='cpyRyts mt-5'>
        <p>Copyrights © 2023 Mazenet Solution Pvt Ltd. All Rights Reserved</p>
      </div>
    </div>
  )
}

export default App
