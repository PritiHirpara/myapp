import "./assets/Home.css";
function Home() {

    var name = "Priti";
    let x = 10;
    let y = 20;

    let mystyle = {
        "color": "green",
        "fontSize": "70px",
        "backgroundColor": "yellow"
    };

    return (<>
        <section>
            <div className="row">
                <div className="col-6">
                    <div className="alert alert-primary" role="alert">
                        A simple primary alert—check it out!
                    </div>
                </div>
                <div className="col-6">
                    <div className="alert alert-warning alert-dismissible fade show" role="alert">
                        <strong>Holy guacamole!</strong> You should check in on some of those fields below.
                        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                    </div>
                </div>
            </div>
            <img src="image/logo.jpg" height={100} alt="logo"></img>
            <h1 style={mystyle} id="head1">Welcome {name}!</h1>
            <h1 style={{
                "color": "green",
                "fontSize": "70px",
                "backgroundColor": "yellow"
            }} className="c1">Total = {x + y}</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci magni error quod sit libero eum temporibus consequuntur ipsum. Dignissimos accusamus cum doloremque nulla delectus harum corrupti quidem aliquid aspernatur qui.</p>
        </section>
    </>);
}

export default Home;