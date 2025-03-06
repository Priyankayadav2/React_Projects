const ContentSection=()=>{
    return <main className="human container">
        <div className="human-content">
        <h2>Supreme: Where Design Meets Desire.</h2>
        <p>
            The general objective of this design thinking 
            course is to assist you with designing better items, 
            administrations, processes, systems, spaces, engineering, and encounters. 
            Design thinking assists you and your group with creating functional and inventive answers to your concerns.
        </p>
        <div className="human-btn">
            <button>Shop Now </button>
            <button className="secondary-btn">Category </button>
        </div>
        <div className="shopping">
            <p>
                Also avaliable on
            </p>
            <div className="brand-icons">
                <img src="/images/biba.png" alt="Biba-logo" style={{ width: "50px", height: "auto" }}/>
                <img src="/images/h$m.png" alt="H&M-logo" style={{ width: "50px", height: "auto" }}/>
                <img src="/images/levis.png" alt="levis-logo"style={{ width: "50px", height: "auto" }} />
                <img src="/images/lv.png" alt="LOUIS VUITTON-logo" style={{ width: "50px", height: "auto" }} />
                <img src="/images/zara.png" alt="zara-logo" style={{ width: "50px", height: "auto" }} />
                
            </div>
        </div>
        </div>
        <div className="human-image">
        <img src="/images/first.jpeg" alt="first-logo" />

        </div>

    </main>
};
export default ContentSection;