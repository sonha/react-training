/**
 * Created by DEV on 8/18/2017.
 */
class Product extends React.Component {
    render() {
        return (
            <div className="item">
                <div className="image">
                    <img src="https://d1ffx7ull4987f.cloudfront.net/images/achievements/large_badge/627/level-3-on-powering-up-with-react-9842a416a9e9136d0f45ba7320942f55.png" alt=""/>
                </div>
                <div className="middle aligned content">
                    <div className="description">
                        <a>Simon Here</a>
                        <p>Codeto Vietnam</p>
                    </div>
                    <div className="extra">
                        <span>Submitted by: </span>
                        <img className="ui avatar image" src="http://i.ndtvimg.com/i/2017-03/cristiano-ronaldo-celebrate-afp_806x605_51488450713.jpg" alt=""/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Product;
