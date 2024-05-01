// Write your code here
import './index.css'
import ConfigurationContext from '../../context/ConfigurationContext'

const Body = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {showContent, showLeftNavbar, showRightNavbar} = value
      return (
        <div className="roy">
          {showLeftNavbar && (
            <div className="leftBar">
              <h1>Left Navbar Menu</h1>
              <ul>
                <li>Item 1</li>
                <li>Item 2</li>
                <li>Item 3</li>
                <li>Item 4</li>
              </ul>
            </div>
          )}

          {showContent && (
            <div className="content">
              <h1>Content</h1>
              <p>
                Lorem ipsum dolor sit amel,consectetur adipiscing clit, sed do
                elusmod tempor incididunt ut labore et dolore magna aliqua.Ut
                enim ad minim veniam.
              </p>
            </div>
          )}
          {showRightNavbar && (
            <div className="leftBar">
              <h1>Right Navbar Menu</h1>
              <div className="bol">
                <p className="p">Ad 1</p>
              </div>
              <div className="bol">
                <p className="p">Ad 2</p>
              </div>
            </div>
          )}
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)
export default Body
