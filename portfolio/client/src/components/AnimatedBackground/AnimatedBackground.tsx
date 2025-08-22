import "./css/AnimatedBackground.css"

const AnimatedBackground = () => (
  <div className="animated-bg" role="presentation">
    {/* Main outlined circles */}
    <div className="circle c1" data-testid="circle"></div>
    <div className="circle c2" data-testid="circle"></div>
    <div className="circle c3" data-testid="circle"></div>
    {/* ...tiny dots... */}
    <div className="tiny t1" data-testid="tiny"></div>
    <div className="tiny t2" data-testid="tiny"></div>
    <div className="tiny t3" data-testid="tiny"></div>
    <div className="tiny t4" data-testid="tiny"></div>
    <div className="tiny t5" data-testid="tiny"></div>
    <div className="tiny t6" data-testid="tiny"></div>
    <div className="tiny t7" data-testid="tiny"></div>
    <div className="tiny t8" data-testid="tiny"></div>
    <div className="tiny t9" data-testid="tiny"></div>
    <div className="tiny t10" data-testid="tiny"></div>
    <div className="tiny t11" data-testid="tiny"></div>
  </div>
);
export default AnimatedBackground;