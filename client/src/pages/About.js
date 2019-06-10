import React, { Component } from "react";
import {Container, Row, Col} from "../components/grid";
import "./about.css";

class About extends Component {
    
    state = {
        images: [
            {
                id: 1,
                alt: "pic1",
                src: "http://nebula.wsimg.com/d98c489789b4d393dfea13a329dd4bac?AccessKeyId=C5BFFEBD8C6E0486FB19&disposition=0&alloworigin=1",
            },            {
                id: 2,
                alt: "pic2",
                src: "http://nebula.wsimg.com/6be490f0ec1bcd944bf9399809df1418?AccessKeyId=C5BFFEBD8C6E0486FB19&disposition=0&alloworigin=1",

            },
        ],
        images2: [
            {
                id: 1,
                alt: "pic1",
                src: "http://nebula.wsimg.com/347a6655eefaa730e01b32c513731a73?AccessKeyId=C5BFFEBD8C6E0486FB19&disposition=0&alloworigin=1",
            },            {
                id: 2,
                alt: "pic2",
                src: "http://nebula.wsimg.com/286510dcd483bde688d592757c77973a?AccessKeyId=C5BFFEBD8C6E0486FB19&disposition=0&alloworigin=1",

            },
        ],
        slideIndex: 0,
        slideIndex2: 0
    }

    prev = e => {
        e.preventDefault();
        if (this.state.slideIndex > 0){
            this.setState({slideIndex: this.state.slideIndex - 1})
        }
    }

    next = e => {
        e.preventDefault();
        if (this.state.slideIndex < this.state.images.length - 1) {
            this.setState({slideIndex: this.state.slideIndex + 1})
        }
    }

    prev2 = e => {
        e.preventDefault();
        if (this.state.slideIndex2 > 0){
            this.setState({slideIndex2: this.state.slideIndex2 - 1})
        }
    }

    next2 = e => {
        e.preventDefault();
        if (this.state.slideIndex2 < this.state.images2.length - 1) {
            this.setState({slideIndex2: this.state.slideIndex2 + 1})
        }
    }

    render(){
        return (
            <Container classes="bg-light border my-3 border-dark">
                <Row classes="border-bottom border-dark">
                    <Col size="md-8" classes="border-right border-dark">
                        <Row classes="border-bottom border-dark">
                            <Col size="md-6" classes="text-center">
                                <h2>Head Coach</h2>
                                <h3>Bob McNamara</h3>
                            </Col>
                            <Col size="md-6">
                                <img src="http://nebula.wsimg.com/9d5abe194ff10e607bc41744bab00ccf?AccessKeyId=C5BFFEBD8C6E0486FB19&disposition=0&alloworigin=1" alt="Coach Bob"/>
                            </Col>
                        </Row>
                        <p>​Robert McNamara, MD is the most successful dragon boat coach in the USA; in fact no one is even close. Teams coached or co-coached by him have won over 100 IDBF World Championship medals including 23 gold medals at IDBF World Championships. He will enter his 31st year of coaching in 2017.</p>
                        <p>His teams have twice reached the pinnacle of dragon boating by winning the Nations Cup in 2007 and 2011. The Nations Cup is the high point trophy awarded to the top Premier team in the world. Teams under his direction have recorded the world’s fastest times or rank in the top few in a number of events. </p>
                        <p>Bob began this sport as a paddler in the 1984 and 1985 dragon boat team that represented the US in the Hong Kong international races. He was then asked to coach in 1986 based on his prior success coaching college and high school rowing teams (two national championships). Since 1986 he has served as the head coach of the Philadelphia Dragon Boat Team winning numerous US national titles. <strong>Bob has taken PDBA members with no paddling experience from the novice level to the top of the podium at the World Championships.</strong></p>
                        <p>An active paddler himself, Coach McNamara has raced in every world championship to date and actively races outrigger and marathon canoe. He also sits on the board of the Board of the International Dragon Boat Federation as Chair of the Medical Science and Sports Commission. </p>
                        <p>All four of his children have won world championship medals for team USA. Bob also serves as Chair of Emergency Medicine at Temple University Hospital.</p>
                        <div className="text-center">
                        <img className="slides" alt={this.state.images[this.state.slideIndex].alt} src={this.state.images[this.state.slideIndex].src} key={this.state.images[this.state.slideIndex].id}/>
                        </div>
                        <div>
                            <div className="text-center py-2">
                                <button onClick={this.prev}>❮ Prev</button>
                                <button onClick={this.next}>Next ❯</button>
                            </div>
                        </div>
                    </Col>
                    <Col size="md-4">
                        <h2 className="text-center">Board of Directors</h2>
                        <h5>Chris Marquart</h5>
                        <h6>President & Chairman</h6>
                        <br/>
                        <h5>Tommy Leonardi</h5>
                        <h6>Vice President</h6>
                        <br/>
                        <h5>Gigi Copeland</h5>
                        <h6>Treasurer</h6>
                        <br/>
                        <h5>Chip Coward</h5>
                        <h6>Secretary</h6>
                        <br/>
                        <h5>Colleen McNamara</h5>
                        <h6>Member-at-Large</h6>
                        <br/>
                        <h5>Cate Fan</h5>
                        <h6>Member-at-Large</h6>
                        <br/>
                        <h5>Bob McNamara</h5>
                        <h6>Member-at-Large</h6>
                        <br/>
                        <h5>Gary Langhans</h5>
                        <h6>Member-at-Large</h6>
                        <br/>
                        <h5>Noel Abejo</h5>
                        <h6>Member-at-Large</h6>
                        <br/>
                    </Col>
                </Row>
                <Row classes="border-bottom border-dark">
                    <Col size="md-7">
                        <h3 className="text-center">Women's Coach</h3>
                        <h4 className="text-center">Colleen McNamara</h4>
                        <p>Colleen McNamara has been an active member of PDBA since 2003, where she started on the youth team. She has been to more world championships that any other female paddler in the United States. She attended her first worlds in 2001 in Philadelphia and won her first gold medal ten years later at Worlds in Tampa. She is a 5x world champion and has won many medals at world championships as a member of the youth team, premier women and premier mixed teams. </p>
                        <p>Colleen joined the PDBA coaching staff in 2016 with the goal to revitalize a successful women's program. </p>
                    </Col>
                    <Col size="md-5" classes="text-center">
                    <img className="slides pt-2" alt={this.state.images2[this.state.slideIndex2].alt} src={this.state.images2[this.state.slideIndex2].src} key={this.state.images[this.state.slideIndex2].id}/>
                        <div>
                            <div className="text-center py-2">
                                <button onClick={this.prev2}>❮ Prev</button>
                                <button onClick={this.next2}>Next ❯</button>
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col size="md-12" classes="text-center">
                        <h4>2018 Results</h4>
                        <p className="results"><strong>Baltimore</strong></p>
                        <p className="results">Premier Mixed - Bronze</p>
                        <p className="results"><strong>Long Beach</strong></p>
                        <p className="results">Premier Open - Gold</p>
                        <p className="results">Premier Women - Gold</p>
                        <p className="results">Premier Mixed - Gold</p>
                        <p className="results"><strong>DC</strong></p>
                        <p className="results">Premier Mixed - Silver</p>
                        <p className="results">Premier Women - Gold</p>
                        <p className="results"><strong>ERDBA/National Championships</strong></p>
                        <p className="results">Premier Open - Gold</p>
                        <p className="results">Premier Women - Gold</p>
                        <p className="results">Premier Mixed - Gold</p>
                        <p className="results">​Senior Mixed - Silver</p>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default About;