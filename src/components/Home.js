import React from 'react'
import img4 from '../img/image_4.jpg'
import img1 from '../img/image_1.jpg'

const Home = () => {
  return (
    <div>
      <div className="bg-img" />
      <div className="container">
        <div className="section-1">
          <h1 className="head">Our Agency</h1>
          <div className="grid">
            <div className="shadow">
              <h3>ECSTASY</h3>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Repellendus ut deleniti tempora Lorem, ipsum dolor sit amet
                consectetur adipisicing elit. Dolores, deserunt.
              </p>{' '}
            </div>
            <div>
              <img src={img4} className="imgStyle" alt="image1" />{' '}
            </div>
          </div>
          <div className="grid _grid">
            <div>
              <img src={img1} className="imgStyle" alt="image1" />{' '}
            </div>
            <div>
              <h3>UNITY</h3>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Repellendus ut deleniti tempora Lorem, ipsum dolor sit amet
                consectetur adipisicing elit. Dolores, deserunt.
              </p>{' '}
            </div>
          </div>
        </div>
        <div className="section-2">
          <h1 className="head">Why Partner With Us</h1>
          <div className="flexbox">
            <div className="flex-item">
              <h3>Inquiry</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
                dolorum iusto hic similique, labore dignissimos corporis, neque
                dicta quisquam laboriosam non, velit perspiciatis a.
              </p>
            </div>
            <div className="flex-item">
              <h3>Happy Customers</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Accusamus tempore consectetur eos aut? Quia, repudiandae sit.
                Voluptatibus inventore excepturi ullam provident rem alias quae
                blanditiis soluta.
              </p>
            </div>
            <div className="flex-item">
              <h3>Join us</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Molestiae, sed odit fugiat maiores pariatur quibusdam veniam
                facere numquam? Commodi assumenda temporibus.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
