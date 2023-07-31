import React from 'react'
import './Main.css'
import HeroImg from '../assets/restauranfood.jpg'
import card1Img from '../assets/greek salad.jpg'
import card2Img from '../assets/lemon dessert.jpg'
import card3Img from '../assets/dish3.jpg'

const Main = () => {
  return (
    <div>
      <div id="hero">
        <div className="hero-info">
          <h2>Little Lemon</h2>
          <h3>Chicago</h3>
          <br/>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse temporibus eaque maiores vero beatae tenetur libero, quisquam similique possimus necessitatibus quia nesciunt ullam exercitationem aliquid magnam ipsa minus? Aperiam, saepe.</p>
          <br/>
          <button>Reserve a Table</button>
        </div>
        <img src={HeroImg} alt="hero-img" height="400px"/>
      </div>
      <main>
        <div className="special_top">
          <h2>This Weeks Specials!</h2>
          <button>Online Menu</button>
        </div>
        <div className="card_container">
          <div className="card">
            <img className="dishImg" src={card1Img} alt="" width="100%" height="100%"/>
            <div className="card_info">
              <div className="card_title">
                <h4>Dish 1</h4>
                <h4 className='dish_price'>$11.00</h4>
              </div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique quasi omnis laboriosam eum, harum autem ab delectus saepe adipisci voluptate? Odit debitis id explicabo, eius optio tempora!
              </p>
              <p>Order</p>
            </div>
          </div> 
          <div className="card">
            <img className="dishImg" src={card2Img} alt="" width="100%" height="100%"/>
            <div className="card_info">
              <div className="card_title">
                <h4>Dish 1</h4>
                <h4 className='dish_price'>$11.00</h4>
              </div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique quasi omnis laboriosam eum, harum autem ab delectus saepe adipisci voluptate? Odit debitis id explicabo, eius optio tempora!
              </p>
              <p>Order</p>
            </div>
          </div>
          <div className="card">
            <img className="dishImg" src={card3Img} alt="" width="100%" height="100%"/>
            <div className="card_info">
              <div className="card_title">
                <h4>Dish 1</h4>
                <h4 className='dish_price'>$11.00</h4>
              </div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique quasi omnis laboriosam eum, harum autem ab delectus saepe adipisci voluptate? Odit debitis id explicabo, eius optio tempora!
              </p>
              <p>Order</p>
            </div>
          </div>
        </div>
          <div className="testimonials">
            <h2>Testimonials</h2>
            <div className="card_container">
              <div className="card" style={{ backgroundColor: "blue" }}>
                <h4>User1</h4>
                <div>
                  <img src={card3Img} alt="" width="100%"/>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit maxime delectus laboriosam dolores earum alias cupiditate soluta pariatur quas!
                  </p>
                </div>
                <div className="rating"></div>
              </div>
              <div className="card">
                <h4>User2</h4>
                <div>
                  <img src="" alt="" />
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit maxime delectus laboriosam dolores earum alias cupiditate soluta pariatur quas!
                  </p>
                </div>
                <div className="rating"></div>
              </div>
              <div className="card">
                <h4>User3</h4>
                <div>
                  <img src="" alt="" />
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit maxime delectus laboriosam dolores earum alias cupiditate soluta pariatur quas!
                  </p>
                </div>
                <div className="rating"></div>
              </div>
              <div className="card">
                <h4>User4</h4>
                <div>
                  <img src="" alt="" />
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit maxime delectus laboriosam dolores earum alias cupiditate soluta pariatur quas!
                  </p>
                </div>
                <div className="rating"></div>
              </div>
            </div>
          </div>
        <div className='about'>
          <section>
            <h2>Little Lemon</h2>
            <h3>Chicago</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum omnis illo aspernatur eaque quidem doloribus, placeat autem perferendis laborum tenetur quo asperiores aut atque recusandae neque nostrum voluptatem eius sed quisquam in! A, nobis ipsam!</p>
          </section>
          <section className='images'>
            <img src="" alt="" />
            <img src="" alt="" />
          </section>
        </div>
      </main>
    </div>
  )
}

export default Main