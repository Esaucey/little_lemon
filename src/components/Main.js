import React from 'react'

const Main = () => {
  return (
    <div>
      <hero>
        <h2>Little Lemon</h2>
        <h3>Chicago</h3>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse temporibus eaque maiores vero beatae tenetur libero, quisquam similique possimus necessitatibus quia nesciunt ullam exercitationem aliquid magnam ipsa minus? Aperiam, saepe.</p>
        <button>Reserve a Table</button>
      </hero>
      <main>
        <div>
          <h2>This Weeks Specials!</h2>
          <button>Online Menu</button>
        </div>
        <div className="card_container">
          <div className="card">
            <img src="" alt="" />
            <div className="card_title">
              <h4>Dish 1</h4>
              <h4>$11.00</h4>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique quasi omnis laboriosam eum, harum autem ab delectus saepe adipisci voluptate? Odit debitis id explicabo, eius optio tempora!
            </p>
            <p>Order</p>
          </div>
          <div className="card">
            <img src="" alt="" />
            <div className="card_title">
              <h4>Dish 2</h4>
              <h4>$11.00</h4>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique quasi omnis laboriosam eum, harum autem ab delectus saepe adipisci voluptate? Odit debitis id explicabo, eius optio tempora!
            </p>
            <p>Order</p>
          </div>
          <div className="card">
            <img src="" alt="" />
            <div className="card_title">
              <h4>Dish 3</h4>
              <h4>$11.00</h4>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique quasi omnis laboriosam eum, harum autem ab delectus saepe adipisci voluptate? Odit debitis id explicabo, eius optio tempora!
            </p>
            <p>Order</p>
          </div>
          <div className="testimonials">
            <div className="card">
              <h4>User1</h4>
              <div>
                <img src="" alt="" />
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
            <div className="card">
              <h4>User1</h4>
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